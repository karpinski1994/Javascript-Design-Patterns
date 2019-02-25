const Person = require('./person');

class FrontDev extends Person {
  constructor(name, type, salary, framework) {
    super(name);
    this.type = type;
    this.salary = salary;
    this.framework = framework;
  }
}

module.exports = FrontDev;