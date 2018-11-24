
const personsLogger = require('./PersonsLogger');
const personsService = require('./PersonsService');
const personsList = require('./PersonsList');

personsService.subscribe(personsLogger);
personsService.subscribe(personsList);

personsService.add({
  name: 'Tomasz Nowak',
  id: '1213asd123'
});

personsService.add({
  name: 'Jan Kowalski',
  id: '12213asddsa123'
});

personsService.delete('12213asddsa123');