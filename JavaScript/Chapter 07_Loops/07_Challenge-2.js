let MAX_ATTEMPTS = 5;
let attempts = 0;
let statuscode = [400, 401, 403, 404, 200];
let response =["Fail", "Fail", "Fail", "Fail", "Pass"];

do {
    console.log("Status Code", statuscode[attempts]);
    console.log("Response", response[attempts]);
    console.log("Attempt -", attempts+1, ": ❌ FAILED (Timeout/Error)");
    attempts++;
} while (response[attempts] !== "Pass" && attempts < MAX_ATTEMPTS);
 
console.log("Status Code", statuscode[attempts]);
    console.log("Response", response[attempts]);
console.log("Attempt -", attempts+1, ": ✅ SUCCESS (Response 200 OK) API call PASSED after", attempts, "attempt(s).");