let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("You are not logged in!!")
}



let statusCode = 200; // APIs are working fine

if (statusCode == 200) {
    console.log("Working fine!")
} else if (statusCode == "404") {
    console.log("not found!");
} else {
    console.log("Not mathcing status code!")
}



//true 
if ("hello") console.log("String is truthy"); // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

// false results
if ("") console.log("Won't print");  // "" -> falsy result
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print"); 

//Real life example
let email = "user@example.com";
let password = "123456";

if (email && password) {
    console.log("Form is valid, submit the form!");
} else {
    console.log("Form is invalid, please fill all the fields!");
}                       
// function validateForm(email, password) {
//     return true;
// }