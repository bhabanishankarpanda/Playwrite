let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:      // IT will allow you to have the duplicate case with first as the usage.
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");
    // default:
    //     console.log("d");

}
//----------------------------------------------------------------------
let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched"); // Output: "String '5' matched"
        break;
    case "5":
        console.log("String '5' matched"); // switch uses ===, so "5" !== 5 (different types)
        break;
}

//--------------------------------------------------------------------
let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}    // Output: "0 matched" (0 === 0, NOT 0 === false)



