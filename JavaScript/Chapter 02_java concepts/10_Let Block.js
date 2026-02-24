let a ="Bhabani";
if (true) {

   console.log(a); // Accessing 'a' from the outer scope
   //let a = "Shankar";// This will cause an error due to the temporal dead zone (TDZ) of 'let'
   //console.log(a); // Accessing 'a' within the block

}


