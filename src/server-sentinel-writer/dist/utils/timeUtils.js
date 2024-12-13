export function getCurrentTimeMs() {
    return Date.now(); // Returns current timestamp in milliseconds
}

export function formatSentinelTimestamp(ms) {
    try {
        // Handle different input types
        const timestamp = ms instanceof Date 
            ? ms 
            : (typeof ms === 'number' || typeof ms === 'string') 
                ? new Date(ms) 
                : new Date();
        
        // Validate the date
        if (isNaN(timestamp.getTime())) {
            throw new Error('Invalid timestamp');
        }
        
        // Use UTC methods to ensure correct timezone handling
        const year = timestamp.getUTCFullYear();
        const month = String(timestamp.getUTCMonth() + 1).padStart(2, '0');
        const day = String(timestamp.getUTCDate()).padStart(2, '0');
        const hours = String(timestamp.getUTCHours()).padStart(2, '0');
        const minutes = String(timestamp.getUTCMinutes()).padStart(2, '0');
        const seconds = String(timestamp.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(timestamp.getUTCMilliseconds()).padStart(3, '0');
        
        // Construct ISO 8601 format with exact precision
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    } catch (error) {
        console.error('Error formatting timestamp:', error);
        
        // Fallback to current UTC time with clear error logging
        const fallbackTimestamp = new Date();
        console.warn('Using fallback current UTC timestamp due to input error');
        
        return formatSentinelTimestamp(fallbackTimestamp);
    }
}