class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
person.prototype.teach = function (subject) {
  console.log(`${this.name} of age ${this.age} years teach ${subject}`);
};

var teacher = new person("Priyesh", 27);
teacher.teach("Maths");
