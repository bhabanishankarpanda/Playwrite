// Input Data
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

// Initialization
let index = 0;
let totalRequests = responseTimes.length;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breachCount = 0;

// While loop to analyze performance
while (index < totalRequests) {
    
    let currentTime = responseTimes[index];
    
    // Min tracking using comparison operator
    if (currentTime < min) {
        min = currentTime;
    }
    
    // Max tracking using comparison operator
    if (currentTime > max) {
        max = currentTime;
    }
    
    // Sum calculation
    sum += currentTime;
    
    // SLA breach check
    if (currentTime > SLA_LIMIT) {
        breachCount++;
    }
    
    index++;
}

// Average calculation
let average = (sum / totalRequests).toFixed(2);
let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

// Overall Status
let overallStatus = breachCount > 0 
    ? "❌ SLA VIOLATED" 
    : "✅ SLA MET";

// Output Report
console.log("Total Requests: " + totalRequests);
console.log("Min Response: " + min + "ms");
console.log("Max Response: " + max + "ms");
console.log("Average Response: " + average + "ms");
console.log("SLA Breaches: " + breachCount + " (" + breachPercentage + "%)");
console.log("Overall Status: " + overallStatus);