let score = 99;

switch (score) {
case (score >90  && score <=100):
console.log("Grade-A");
break;
case (score >=80  && score <=89):
console.log("Grade-B");
break;
case (score >=70  && score <=79):
console.log("Grade-C");
break;
case (score >=60  && score <=69):
console.log("Grade-D");
break;
case (score >=0  && score <=59):
console.log("Grade-F");
break;
default:
console.log("Not a valid score");
}
