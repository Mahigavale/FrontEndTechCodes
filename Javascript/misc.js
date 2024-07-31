console.log(10 + 23 + "5" + 20 + 20); // >>
console.log("5" + 10);
console.log("5" + "5");

let names = ["mahesh", "mansi", "bhumi", "samar"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(typeof names);

let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
  console.log("--------------------");
}
console.log("do while loop :");
let i1 = 0;
do {
  console.log(names[i1]);
  i1++;
  console.log("***************");
} while (i1 < names.length);

console.log("for in :");
for (let v in names) {
  console.log(v);
}
console.log("for off :");
for (let v of names) {
  console.log(v);
}
let x = "12";
//console.log(toNumber(x) + 12);
console.log("              Ma   hesh");
console.log("mahehshs" + "asdfg");

console.log("mahesh\ngavale");
