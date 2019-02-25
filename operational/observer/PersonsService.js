

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

  unsubscribe(observer) {
    const rmvdObsId = this.observers.findIndex(obs => observer);
    this.observers.splice(rmvdObsId, 1);
  }
  
  notifyAll() {
    this.observers.forEach(obs => obs.update(this.persons));
  }
}

module.exports = new PersonsService();