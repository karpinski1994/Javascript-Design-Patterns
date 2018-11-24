

class PersonsLogger {
  constructor() {
    this.persons = [];
  }
  update(updPersons) {
    this.persons = updPersons;
    this.logUpdate();
  }
  logUpdate() {
    console.log('PERSONS UPDATED');
    console.log('Current local persons:', this.persons)
  }
}

module.exports = new PersonsLogger();