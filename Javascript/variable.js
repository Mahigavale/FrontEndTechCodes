// variables => 1)Local 2)Global.
//1)Local=> declared in the function, function scope, advisable

function demo() {
  let dr = "Mahesh";
  console.log(dr);
}
//console.log(dr);
// you cannot access it here.
//local variable example.

//2)GLobal variables decalred outside function.
var name = "Mahesh";
function demo2() {
  console.log(name);
}
console.log(name);
demo2();

function demo3() {
  car = "car";
}
demo3();
console.log("car:", car);

console.log(10 != "10"); //checks the only value and not the type.//false
console.log(10 !== "10"); //checks the value as well as type. //true
