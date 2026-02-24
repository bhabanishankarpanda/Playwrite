const pi =3.14;
if(true) {
    console.log(pi); // Accessing 'pi' from the outer scope 
    pi = 3.14159; // This will cause an error because 'pi' is a constant and cannot be reassigned
    console.log(pi); // Accessing 'pi' within the block
}
