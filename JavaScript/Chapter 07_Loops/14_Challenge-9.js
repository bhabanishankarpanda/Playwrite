// Global counter using var
var strikeCount = 0;

// Fixed credentials and threshold using const
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Login attempts array
const attempts = ["wrong", "wrong", "wrong", "correct"];

let index = 0;
let isLocked = false;

// Process attempts using do...while loop
do {
    
    let currentAttempt = attempts[index];
    let enteredEmail;
    let enteredPassword;

    // Simulate credentials based on attempt type
    if (currentAttempt === "correct") {
        enteredEmail = VALID_EMAIL;
        enteredPassword = VALID_PASSWORD;
    } else {
        enteredEmail = "wrong@user.com";
        enteredPassword = "wrongpass";
    }

    console.log("Attempt " + (index + 1) + ":");

    // If already locked
    if (isLocked === true) {
        console.log("🔒 ACCOUNT LOCKED - Rejected");
    } 
    else {
        // Validate using strict equality and logical AND
        if (enteredEmail === VALID_EMAIL && enteredPassword === VALID_PASSWORD) {
            console.log("✅ LOGIN SUCCESSFUL");
            strikeCount = 0; // reset strikes
        } else {
            strikeCount++;
            console.log("❌ FAILED - Strike " + strikeCount + "/" + MAX_ATTEMPTS);

            if (strikeCount === MAX_ATTEMPTS) {
                isLocked = true;
                console.log("🚨 ACCOUNT LOCKED");
            }
        }
    }

    index++;

} while (index < attempts.length);