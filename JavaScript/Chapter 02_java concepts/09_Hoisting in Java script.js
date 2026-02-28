function CheckAccess(IsAdmin) {
    if (IsAdmin) {
        console.log("Access granted");

    } else {
        console.log("Access denied");
    }
}
CheckAccess(true);
CheckAccess(false); 
//////////////////////////

for (var i = 0; i < 5; i++) {
    // do something
}
console.log(i);   // 5 (var leaks out of the for block!)

// Compare with let:
for (let j = 0; j < 5; j++) {
    // do something
}
//console.log(j);  // ReferenceError: j is not defined


//The Classic setTimeout + var Bug
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var loop: " + i);
    }, 100);
}
// Output: 3, 3, 3  (NOT 0, 1, 2!)

// WHY? var is function-scoped. There is only ONE "i" variable.
// By the time setTimeout callbacks execute, the loop has finished
// and i = 3 for all three callbacks.

// FIX with IIFE (old way):
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log("IIFE fix: " + j);
        }, 100);
    })(i);
}
// Output: 0, 1, 2