const employeeFactory = require('./employeeFactory');

const joe = employeeFactory('Joe Doe', 'frontdev', 8000, 'react');
const bart = employeeFactory('Bart Smith', 'backdev', 8000, undefined, 'sql');

console.log(joe)
console.log(bart)