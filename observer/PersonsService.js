

class PersonsService {
  constructor() {
    this.persons = [];
    this.observers = [];
  }
    
  add(person) {
    this.persons.push({person});
    this.notifyAll();
  }
  delete(id) {
    const delId = this.persons.findIndex(per => per.id === id);
    this.persons.splice(delId, 1);
    this.notifyAll();
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notifyAll() {
    this.observers.forEach(obs => obs.update(this.persons));
  }
}

module.exports = new PersonsService();