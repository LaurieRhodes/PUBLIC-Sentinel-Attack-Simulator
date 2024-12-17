// schemas/anomalies/validation.js
import { formatSentinelTimestamp, getCurrentTimeMs } from '../../utils/timeUtils.js';
import { isValidISODateTime} from '../../validation/schemaValidator.js';
import { schema } from './schema.js';


// Add specific field validators
const fieldValidators = {
    Score: (value) => {
        // Score should be a string representing a number between 0 and 1
        const num = parseFloat(value);
        return !isNaN(num) && num >= 0 && num <= 1;
    },
    ExtendedProperties: (value) => {
        // Ensure ExtendedProperties has at least one key
        return Object.keys(value).length > 0;
    },
    TimeGenerated: (value, currentTime) => {
        try {
            const inputDate = new Date(value);
            const inputTimestamp = inputDate.getTime();
            const currentTimestamp = new Date(currentTime).getTime();
            const difference = Math.abs(currentTimestamp - inputTimestamp);
            
            console.error('TIMESTAMP_VALIDATION_DETAILED', JSON.stringify({
                inputValue: value,
                inputTimestamp: inputTimestamp,
                inputDate: inputDate.toISOString(),
                currentTime: currentTime,
                currentTimestamp: currentTimestamp,
                currentTimeIso: new Date(currentTime).toISOString(),
                difference: difference,
                maxAllowedDifference: 180000, // 3 minutes in milliseconds
                timezoneOffset: inputDate.getTimezoneOffset(),
                isWithinTolerance: difference <= 180000
            }, null, 2));
            
            // Check if the timestamp is within 3 minutes (180,000 milliseconds)
            return difference <= 180000;
        } catch (error) {
            console.error('TIMESTAMP_VALIDATION_ERROR', {
                error: error.message,
                inputValue: value,
                currentTime: currentTime
            });
            return false;
        }
    }
};


export const validateEvent = async (eventData) => {
    const errors = [];
    const currentTime = getCurrentTimeMs();

    // Check required fields
    const requiredFields = Object.entries(schema.fields)
        .filter(([_, field]) => field.required)
        .map(([name]) => name);

    for (const fieldName of requiredFields) {
        if (!eventData.hasOwnProperty(fieldName)) {
            errors.push(`Missing required field: ${fieldName}`);
        }
    }

    // Validate field types and formats
    for (const [fieldName, value] of Object.entries(eventData)) {
        const fieldSchema = schema.fields[fieldName];
        if (!fieldSchema) {
            errors.push(`Unknown field: ${fieldName}`);
            continue;
        }

        // First check type
        switch (fieldSchema.type) {
            case 'boolean':
                if (typeof value !== 'boolean') {
                    errors.push(`${fieldName} must be a boolean, received ${typeof value}`);
                }
                break;            
            case 'datetime':
                if (!isValidISODateTime(value)) {
                    errors.push(`Invalid datetime format for ${fieldName}: ${value}`);
                }
                break;
            case 'int':
                  if (typeof value !== 'number' || !Number.isInteger(value)) {
                      errors.push(`${fieldName} must be an integer, received ${typeof value}`);
                  }
                break;
            case 'string':
                    if (typeof value !== 'string') {
                        errors.push(`${fieldName} must be a string, received ${typeof value}`);
                    }
                    break;
            case 'json_array':
    // First check if it's an array specifically
    if (!Array.isArray(value)) {
        errors.push(`${fieldName} must be a JSON array, received ${Array.isArray(value) ? 'array' : typeof value}`);
        break;
    }
        
    // Validate each element in the array is a valid JSON object
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        
        // Check if element is an object
        if (typeof element !== 'object' || element === null) {
            errors.push(`${fieldName}[${i}] must be a JSON object, received ${typeof element}`);
            continue;
        }
        
        // Check if element is serializable (optional but recommended)
        try {
            JSON.stringify(element);
        } catch (e) {
            errors.push(`${fieldName}[${i}] contains non-serializable values`);
        }
        
        // Check for circular references (optional but recommended)
        const seen = new WeakSet();
        const hasCircular = (obj) => {
            if (typeof obj !== 'object' || obj === null) return false;
            if (seen.has(obj)) return true;
            seen.add(obj);
            return Object.values(obj).some(val => hasCircular(val));
        };
        
        if (hasCircular(element)) {
            errors.push(`${fieldName}[${i}] contains circular references`);
        }
    }
    break;
        }

        // Then check specific field validation if it exists
        if (fieldValidators[fieldName]) {
            if (!fieldValidators[fieldName](value, currentTime)) {
                errors.push(`Validation failed for ${fieldName}: ${value}`);
            }
        }
    }

    // Validate time sequence logic
    if (eventData.StartTime && eventData.EndTime) {
        const startTime = new Date(eventData.StartTime).getTime();
        const endTime = new Date(eventData.EndTime).getTime();
        if (startTime > endTime) {
            errors.push('StartTime must be before or equal to EndTime');
        }
    }

    if (errors.length > 0) {
        throw new Error(`Validation errors:\n${errors.join('\n')}`);
    }

    return true;
};


// Enhanced validation rules with descriptions
export const rules = {
    timeGeneratedMaxAge: 180000, // 3 minutes in milliseconds
    requiredFields: ["TimeGenerated"],
    fieldConstraints: {
        Score: "Must be a string representing a number between 0 and 1",
        ExtendedProperties: "Must contain at least one key-value pair",
        TimeGenerated: "Must be within 3 minutes of current time",
        StartTime: "Must be before or equal to EndTime"
    }
};