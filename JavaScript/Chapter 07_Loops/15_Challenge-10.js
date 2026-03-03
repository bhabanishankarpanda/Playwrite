// Global counters using var
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// Test cases (const = fixed dataset)
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "User role loose match", actual: "1", expected: 1, type: "looseEqual" },
    { name: "Response type is number", actual: 500, expected: "number", type: "typeCheck" },
    { name: "Token should be truthy", actual: "abc123", expected: true, type: "truthy" },
    { name: "Response time under limit", actual: 650, expected: 500, type: "lessThan" }
];

// Store results
let results = [];

// FOR LOOP → Execute tests
for (let i = 0; i < testCases.length; i++) {

    let tc = testCases[i];
    let status = "";
    let message = "";
    let passed = false;

    try {

        // SWITCH for comparison type
        switch (tc.type) {

            case "strictEqual":
                passed = (tc.actual === tc.expected);
                message = `${tc.actual} === ${tc.expected}`;
                break;

            case "looseEqual":
                passed = (tc.actual == tc.expected);
                message = `${tc.actual} == ${tc.expected}`;
                break;

            case "typeCheck":
                passed = (typeof tc.actual === tc.expected);
                message = `typeof ${tc.actual} === ${tc.expected}`;
                break;

            case "truthy":
                passed = !!tc.actual === true;
                message = `Boolean(${tc.actual}) === true`;
                break;

            case "lessThan":
                passed = (tc.actual < tc.expected);
                message = `${tc.actual} < ${tc.expected}`;
                break;

            default:
                throw "Invalid comparison type";
        }

        // IF-ELSE for result classification
        if (passed === true) {
            status = "PASS";
            passCount++;
        } else if (passed === false) {
            status = "FAIL";
            failCount++;
        }

    } catch (err) {
        status = "ERROR";
        message = err ?? "Unknown error";
        errorCount++;
    }

    // Store result
    results.push({
        id: `TC-${String(i + 1).padStart(2, "0")}`,
        name: tc.name ?? "Unnamed Test",
        status: status,
        message: message
    });
}

// WHILE LOOP → Consecutive passes from start
let consecutivePass = 0;
let idx = 0;

while (idx < results.length && results[idx].status === "PASS") {
    consecutivePass++;
    idx++;
}

// DO...WHILE → Find first failure
let firstFailure = null;
let j = 0;

do {
    if (results[j].status === "FAIL") {
        firstFailure = results[j].id;
        break;
    }
    j++;
} while (j < results.length);

// Print detailed report
for (let k = 0; k < results.length; k++) {
    let icon = results[k].status === "PASS" ? "✅" :
               results[k].status === "FAIL" ? "❌" : "⚠️";

    console.log(`${icon} ${results[k].id}: ${results[k].name} → ${results[k].status} (${results[k].message})`);
}

// Summary
let total = testCases.length;
let passRate = ((passCount / total) * 100).toFixed(2);
let overall = (failCount === 0 && errorCount === 0) ? "✅ PASSED" : "❌ FAILED";

console.log("\n----- SUMMARY REPORT -----");
console.log("Total Tests:", total);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Consecutive Passes From Start:", consecutivePass);
console.log("First Failure:", firstFailure ?? "None");
console.log("Pass Rate:", passRate + "%");
console.log("Overall:", overall);