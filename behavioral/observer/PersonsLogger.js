

class PersonsLogger {
  constructor() {
    this.persons = [];
  }
  update(updPersons) {
    this.persons = updPersons;
    this.logUpdate();
  }
  logUpdate() {
    console.log('PersonsLoogger persons:', this.persons)
  }
}

module.exports = new PersonsLogger();