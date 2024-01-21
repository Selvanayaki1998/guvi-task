let data = {
  name: "Selvanayaki",
  education: "Bachelor of Computer Application",
  programmingLanguages: ["JavaScript", "Python", "Java"],
  email: "selvi9897inbox@gmail.com",
  phone_no: 123 - 456,
};

// for
console.log("for loop");
for (let i = 0; i < Object.keys(data).length; i++) {
  console.log(`${Object.keys(data)[i]}: ${data[Object.keys(data)[i]]}`);
}

// for in
console.log("for in");
for (let key in data) {
  console.log(`${key}: ${data[key]}`);
}

console.log("forEach");
Object.keys(data).forEach(function (keys) {
  console.log(`${keys} : ${data[keys]}`);
});

console.log("for of");
for (let [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
}
