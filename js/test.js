const user = {
  id: 786,
  name: "opu",
  age: 28,
  education: {
    degree: "Masters",
  },
};
const {
  education: { degree : title},
} = user;
console.log(title);
