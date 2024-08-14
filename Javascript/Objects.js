const Profile = {
  name: "mahesh",
  age: 12,
  salary: 12345678,
  location: "Pune",
  isemployee: true,
  getStatus: function () {
    return this.isemployee;
  },
};

console.log(Profile);

Profile.name = "Mansi";
console.log(Profile.name);

console.log(Profile.getStatus());
console.log(Profile);
