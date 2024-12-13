// Define schema validators
const schemaValidators = {
    ASimAuthenticationEventLogs: {
        fields: {
            TimeGenerated: { 
                type: 'datetime', 
                required: true, 
                description: 'The timestamp (UTC) of when the authentication event occurred.'
            },
            EventType: { 
                type: 'string', 
                required: true, 
                description: 'The type of authentication event (e.g., Logon, Logoff)'
            },
            EventResult: { 
                type: 'string', 
                required: true, 
                description: 'The result of the authentication event (e.g., Success, Failure)'
            }
        }
    }
};

function isValidISODateTime(dateStr) {
    if (typeof dateStr !== 'string') return false;
    
    try {
        const date = new Date(dateStr);
        return !isNaN(date.getTime()) && dateStr.endsWith('Z');
    } catch {
        return false;
    }
}

function validateAgainstSchema(dcrType, eventData) {
    const schema = schemaValidators[dcrType];
    if (!schema || !schema.fields) {
        throw new Error(`No schema definition found for ${dcrType}`);
    }

    const errors = [];

    // Check required fields
    for (const [fieldName, field] of Object.entries(schema.fields)) {
        if (field.required && !eventData.hasOwnProperty(fieldName)) {
            errors.push(`Missing required field: ${fieldName} (${field.description})`);
        }
    }

    // Validate field types and unknown fields
    for (const [fieldName, value] of Object.entries(eventData)) {
        const fieldSchema = schema.fields[fieldName];
        if (!fieldSchema) {
            // Don't treat unknown fields as errors for now
            continue;
        }
        
        // Type checking
        switch (fieldSchema.type) {
            case 'datetime':
                if (!isValidISODateTime(value)) {
                    errors.push(`Invalid datetime format for ${fieldName}: must be UTC/Zulu time (e.g., '2024-12-05T18:26:00.694Z')`);
                }
                break;
            case 'string':
                if (typeof value !== 'string') {
                    errors.push(`${fieldName} must be a string, received ${typeof value}`);
                }
                break;
            case 'json':
                if (typeof value !== 'object' || value === null) {
                    errors.push(`${fieldName} must be a JSON object, received ${typeof value}`);
                }
                break;
        }
    }

    // If there are any validation errors, throw them all at once
    if (errors.length > 0) {
        throw new Error(`Schema validation errors for ${dcrType}:\n${errors.join('\n')}`);
    }

    return true;
}

function getExampleRecord(dcrType) {
    const schema = schemaValidators[dcrType];
    if (!schema || !schema.fields) {
        throw new Error(`No schema definition found for ${dcrType}`);
    }

    const currentTime = new Date().toISOString();
    
    // Create minimal example with only required fields
    const minimalExample = {};
    const fullExample = {};
    
    for (const [fieldName, field] of Object.entries(schema.fields)) {
        if (field.required) {
            switch (field.type) {
                case 'datetime':
                    minimalExample[fieldName] = currentTime;
                    break;
                case 'string':
                    minimalExample[fieldName] = `example-${fieldName}`;
                    break;
                case 'json':
                    minimalExample[fieldName] = { "example": "data" };
                    break;
            }
        }
        
        // Add all fields to full example
        switch (field.type) {
            case 'datetime':
                fullExample[fieldName] = currentTime;
                break;
            case 'string':
                fullExample[fieldName] = `example-${fieldName}`;
                break;
            case 'json':
                fullExample[fieldName] = { 
                    "example": "data",
                    "description": field.description
                };
                break;
        }
    }

    return {
        minimal: minimalExample,
        full: fullExample
    };
}

// Enhanced tool description with schema information
function generateToolDescription(dcrType) {
    const schema = schemaValidators[dcrType];
    if (!schema || !schema.fields) {
        return "Schema information not available";
    }

    const requiredFields = Object.entries(schema.fields)
        .filter(([_, field]) => field.required)
        .map(([name, field]) => `  - ${name} (${field.type}): ${field.description}`)
        .join('\n');

    const optionalFields = Object.entries(schema.fields)
        .filter(([_, field]) => !field.required)
        .map(([name, field]) => `  - ${name} (${field.type}): ${field.description}`)
        .join('\n');

    const examples = getExampleRecord(dcrType);

    return `Schema Information for ${dcrType}:

Required Fields:
${requiredFields}

Optional Fields:
${optionalFields}

Minimal Valid Example:
${JSON.stringify(examples.minimal, null, 2)}

Complete Example:
${JSON.stringify(examples.full, null, 2)}
`;
}

export {
    validateAgainstSchema,
    getExampleRecord,
    generateToolDescription,
    isValidISODateTime
};