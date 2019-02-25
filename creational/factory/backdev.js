const Person = require('./person');


class BackDev extends Person {
  constructor(name, type, salary, db) {
    super(name);
    this.type = type;
    this.salary = salary;
    this.db = db;
  }
}

module.exports = BackDev;