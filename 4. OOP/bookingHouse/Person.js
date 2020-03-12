class Person {
    constructor(name, surname, dateOfBird) {
        this.name = name;
        this.surname = surname;
        this.dateOfBird = new Date(dateOfBird);
    }
    getData() {
        let day = this.dateOfBird.getDate();
        let month = this.dateOfBird.getMonth() + 1;
        let year = this.dateOfBird.getFullYear();
        return (`${this.name} ${this.surname}, ${day}.${month}.${year}.`);
    }
    getYearsOld() {
        let year = this.dateOfBird.getFullYear();
        let today = new Date().getFullYear();
        return (`${today - year} years`);
    }
}
module.exports.Person = Person;