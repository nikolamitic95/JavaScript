class Player {
    constructor(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    getData() {
        return `            ${this.country.name.slice(0, 2).toUpperCase()} ${this.betAmount} eur, ${this.person.name} ${this.person.surname}, ${this.person.getYearsOld()}`

    }
}
module.exports.Player = Player;