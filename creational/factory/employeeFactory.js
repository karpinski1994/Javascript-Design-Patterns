const FrontDev = require('./frontdev');
const BackDev = require('./backdev');


const employeeFactory = (name, type, salary = 0, framework, db) => {

  if (type === 'backdev') {
    return new BackDev(name, type, salary, db);
  }

  if(type === 'frontdev') {
    return new FrontDev(name, type, salary, framework);
  }
}

module.exports = employeeFactory;