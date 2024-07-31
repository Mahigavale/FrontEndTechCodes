let num1 = 45;
let num2 = 45;
let num3 = "45";
let num4;
let num5 = null;

console.log(typeof num1);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == num3);
console.log(num1 === num3);
console.log(num4);
console.log(num5);
console.log(typeof num4, typeof num5);

let name = "M";
let name2 = "N";
console.log(name > name2);
console.log(name < name2);
//value only,=== =>value+typeof
console.log(5 ** 2);
console.log(undefined + 1); //NAN in maths
console.log(null + 5); //5 null=>0 in maths

console.log((num1 **= 3)); //(45*45*45)

console.log(5 != 34);
console.log(5 != "5");
console.log(5 !== "5");

5 > 6 ? console.log("yes") : console.log("no");

let demo1 = 56;
let demo2 = 66;

if (demo1 > demo2 && demo2 > demo1) {
  console.log("demo");
} else {
  console.log("demo2S");
}

let demo45 = 5; //0101 =>0010
console.log(demo45 >> 1);
console.log(demo45 << 1); //0101 =>1010
console.log(demo45);
console.log(5 >> 2);
console.log(-5 >> 2);

