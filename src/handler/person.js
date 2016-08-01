import Person from '../repository/person';

export function *getPersons() {
    const person = new Person(this.repository);    
    this.body = yield person.getAll();
    console.info('Found ' + this.body.length + ' persons');
};
