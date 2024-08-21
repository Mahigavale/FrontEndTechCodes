const Employee = {
  name: "MAhesh",
  village: "Pune",
  salary: 1234.67,
  Profession: "Engineer",
  getProfesssion: function () {
    return this.Profession;
  },
};

console.log(Employee);
console.log(Employee.village);
console.log(Employee.getProfesssion());
