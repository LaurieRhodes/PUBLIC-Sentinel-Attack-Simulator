// schemas/anomalies/validation.js
import { formatSentinelTimestamp, getCurrentTimeMs } from '../../utils/timeUtils.js';
import { isValidISODateTime} from '../../validation/schemaValidator.js';
import { schema } from './schema.js';


// Add specific field validators
const fieldValidators = {
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
                if (typeof value !== 'int') {
                    errors.push(`${fieldName} must be a int, received ${typeof value}`);
                }
                break;
            case 'string':
                    if (typeof value !== 'string') {
                        errors.push(`${fieldName} must be a string, received ${typeof value}`);
                    }
                    break;
            case 'dynamic':
                if (typeof value !== 'object' || value === null) {
                    errors.push(`${fieldName} must be a JSON object, received ${typeof value}`);
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
        TimeGenerated: "Must be within 3 minutes of current time",
        StartTime: "Must be before or equal to EndTime"
    }
};