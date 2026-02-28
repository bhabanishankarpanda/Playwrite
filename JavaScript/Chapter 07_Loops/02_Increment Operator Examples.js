let a = 10;
console.log(a++ + a); //A+B -> A -> a++ (  ExpA - 10, a-> 11 ) 10 + 11 -> 21

// // ERT
// // Line No|  a | Expa(a++)
// // 1      | 10 | NA
// // 2      | 11 | 10

let A = 10;
console.log(A++ + ++A);
console.log(A);

// // A + B
// // ExpA -> 10, a -> 11
// // +
// // ExpB -> 12, a-> 12
// // ExpA. + ExpB ->  10+12 -> 22
// // a -> 12

let c = 10;
console.log(++c + ++c);
console.log(c);

let d = 10;
let r = d--;
let r2 = --d;
console.log(r);
console.log(r2);