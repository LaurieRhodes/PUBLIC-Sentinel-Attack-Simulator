# Schema Structure Documentation

## Overview

The schema system follows a modular pattern with three key components for each log type:

1. `schema.js` - Schema definition and structure
2. `validation.js` - Validation rules and functions
3. `examples.js` - Example events and test data

Each schema folder follows this structure:

```
SchemaName/
├── schema.js        # Schema definition
├── validation.js    # Validation logic
└── examples.js      # Example events
```

## Component Descriptions

### schema.js

#### Purpose

- Defines the data structure for a specific log type
- Specifies required and optional fields
- Defines field types and constraints
- Documents field descriptions and usage

#### Structure

```javascript
export const schema = {
    type: "object",
    required: ["TimeGenerated", "SourceSystem", /* other required fields */],
    properties: {
        TimeGenerated: {
            type: "string",
            format: "date-time",
            description: "Time at which the event was generated"
        },
        // Additional field definitions
    }
};

export const streamDeclaration = {
    // Stream configuration for ingestion
};

export const transformKql = `
    // KQL transformation rules
`;
```

#### Key Components

1. **Schema Object**
   
   - type: Always "object" for event schemas
   - required: Array of required field names
   - properties: Field definitions and constraints

2. **Field Definitions**
   
   - type: Data type (string, number, boolean, object, array)
   - format: Special formats (date-time, uuid, etc.)
   - description: Field documentation
   - pattern: Regex patterns for validation
   - enum: Allowed values for enumerated fields

3. **Stream Declaration**
   
   - Defines how data should be ingested
   - Specifies stream configuration

4. **KQL Transformation**
   
   - Defines data transformations
   - Maps fields to standardized formats

### validation.js

#### Purpose

- Implements validation logic for events
- Provides custom validation rules
- Handles complex field validations
- Validates relationships between fields

#### Structure

```javascript
import { schema } from './schema.js';

export async function validateEvent(eventData) {
    // Basic schema validation
    await validateAgainstSchema(schema, eventData);

    // Custom validations
    validateCustomRules(eventData);

    // Relationship validations
    validateRelationships(eventData);
}

function validateCustomRules(eventData) {
    // Custom validation logic
}

function validateRelationships(eventData) {
    // Relationship validation logic
}
```

#### Key Components

1. **Schema Validation**
   
   - Validates against base schema
   - Checks required fields
   - Validates data types

2. **Custom Rules**
   
   - Business logic validation
   - Field value constraints
   - Conditional requirements

3. **Relationship Validation**
   
   - Field dependencies
   - Cross-field validations
   - Logical constraints

### examples.js

#### Purpose

- Provides example events
- Demonstrates correct usage
- Serves as testing data
- Documents common patterns

#### Structure

```javascript
export const examples = [
    {
        name: "Standard Login Event",
        description: "Example of a successful login event",
        data: {
            TimeGenerated: "2024-12-13T10:30:00Z",
            // Event specific fields
        }
    },
    // Additional examples
];

export const testCases = [
    {
        name: "Valid Event",
        data: { /* valid event data */ },
        shouldPass: true
    },
    {
        name: "Missing Required Field",
        data: { /* invalid event data */ },
        shouldPass: false,
        errorPattern: /Required field missing/
    }
];
```

#### Key Components

1. **Example Events**
   
   - Complete, valid events
   - Common use cases
   - Different event variations

2. **Test Cases**
   
   - Validation testing
   - Error cases
   - Edge cases

3. **Documentation**
   
   - Usage examples
   - Field descriptions
   - Common patterns

## Usage Patterns

### Schema Implementation

1. Start with schema.js to define structure
2. Implement validation.js for rules
3. Create examples.js for testing

### Validation Process

```javascript
async function validateAndProcess(eventData) {
    // 1. Load schema
    const schema = await loadSchema();

    // 2. Validate
    await validateEvent(eventData);

    // 3. Process
    await processEvent(eventData);
}
```

### Testing With Examples

```javascript
async function testSchema() {
    for (const testCase of testCases) {
        try {
            await validateEvent(testCase.data);
            assert(testCase.shouldPass, "Validation should have failed");
        } catch (error) {
            assert(!testCase.shouldPass, "Validation should have passed");
        }
    }
}
```

## Best Practices

### Schema Definition

1. Clear field descriptions
2. Appropriate data types
3. Meaningful constraints
4. Well-documented enums

### Validation Implementation

1. Comprehensive error messages
2. Efficient validation logic
3. Clear validation rules
4. Proper error handling

### Example Creation

1. Cover common cases
2. Include edge cases
3. Document expectations
4. Test validation rules

## Security Considerations

### Data Validation

- Input sanitization
- Type checking
- Size limitations
- Format validation

### Error Handling

- Secure error messages
- Proper error logging
- No sensitive data exposure

### Performance

- Efficient validation
- Proper caching
- Resource management

## Schema Categories

### 1. ASIM Schemas

- Normalized security schemas
- Standard field mappings
- Common security patterns

### 2. Cloud Provider Schemas

- AWS log formats
- GCP log formats
- Cloud-specific fields

### 3. Traditional Security Schemas

- Windows events
- Syslog formats
- Common security logs

## Maintenance and Updates

### Schema Updates

1. Version control
2. Backward compatibility
3. Migration support
4. Documentation updates

### Validation Updates

1. New rule addition
2. Rule modification
3. Performance optimization
4. Error message updates

### Example Updates

1. New use cases
2. Updated patterns
3. Additional test cases
4. Documentation improvements