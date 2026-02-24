function CheckAccess(IsAdmin) {
    if (IsAdmin) {
        console.log("Access granted");

    } else {
        console.log("Access denied");
    }
}
CheckAccess(true);
CheckAccess(false); 


for (var i = 0; i < 5; i++) {
    // do something
}
console.log(i);   // 5 (var leaks out of the for block!)

// Compare with let:
let j = 0
for (let j = 0; j < 5; j++) {
    // do something
}
console.log(j);  // ReferenceError: j is not defined