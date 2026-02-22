var a = 10; //Global scope
console.log(a);

//Define function
function PrintVar() {
    console.log("Hello Var");
    var a = 20; //Local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("var = " + a);
}

//Calling the function
PrintVar();

//Define function
function PrintLet() {
    console.log("Hello Let");
    let a = 20; //Local scope
    a = 50;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("let = " + a);
}

//Calling the function
PrintLet();

//Define function
function PrintConst() {
    console.log("Hello Const");
    const a = 20; //Local scope
    //a = 50;
    console.log(a);
    if (true) {
        const a = 30;
        console.log(a);
    }
    console.log("const = " + a);
}

//Calling the function
PrintConst();
