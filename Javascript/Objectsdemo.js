const Person1 = {
  first_name: "Abc",
  last_name: "Def",
  age: "23",
  salary: 234.67,
  debt: 234,
  netWorth: function () {
    return this.salary - this.debt;
  },
  fullname: function () {
    return this.first_name + "  " + this.last_name;
  },
  getinfo: function () {
    return this.first_name + this.last_name + this.salary;
  },
};
console.log(Person1);
console.log(Person1.netWorth());
console.log(Person1.fullname());
console.log(Person1.netWorth);
console.log(Person1.fullname);
console.log(Person1.getinfo());
//when we give the function name with Parenthesis then the fucntion gets executed.
//when we just take the function name without parenthesis it gives the Object of function.

const member = {
  name: "",
  salary: null,
  age: null,
};

member.name = "Pooja";
member.salary = 12345;
member.age = 56;

console.log(member);
