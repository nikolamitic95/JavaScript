"use strict"

const CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",

});

class Country {
    constructor(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
}

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
class Address {
    constructor(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    getData() {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country.name.slice(0, 2).toUpperCase()}`
    }

    getFinalData() {
        return `      ${this.street}, ${this.postalCode} ${this.city}`
    }
}
class BettingPlace {
    constructor(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.numberOfPlayers = 0;
        this.betSum = 0;
    }
    addPlayers(player) {
        this.listOfPlayers.push(player);
        this.numberOfPlayers++;
        this.betSum += player.betAmount;
    }
    getData() {
        let playerData = "";
        this.listOfPlayers.forEach(element => { playerData += element.getData() + "\n" })
        return playerData;
    }
}
class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlace = [];
        this.numberOfPlayers = 0;
    }


    addBettingPlace(place) {
        this.listOfBettingPlace.push(place);
        this.numberOfPlayers += place.numberOfPlayers;
    }
    getData() {
        let bettingHouseData = `${this.competition}, ${this.listOfBettingPlace.length} betting places, ${this.numberOfPlayers} bets`;
        let addressAndPlayersData = "";
        this.listOfBettingPlace.forEach(function (player) {
            let addressData = `\n${player.address.getFinalData()}, sum of all bets: ${player.betSum}eur`;
            let playersData = `\n${player.getData()}`;

            addressAndPlayersData += (addressData + playersData);
        })
        return `${bettingHouseData}\t${addressAndPlayersData}`;
    }
}


let createPlayer = function (name, surname, dateOfBird, countryName, odds, continent, bet) {
    let per = new Person(name, surname, dateOfBird);
    let coun = new Country(countryName, odds, continent);
    return new Player(per, bet, coun);
}

let createBettingPlace = function (country, city, postalCode, street, number) {
    let add = new Address(country, city, postalCode, street, number);
    return new BettingPlace(add);
}


let personOne = new Person("Nikola", "Mitic", "6/26/95");

let countryOne = new Country("Srbija", 2, CONTINENT);

let addresOne = new Address(countryOne, "Beograd", 11000, "Nemanjina", 4);

let bettingHouseOne = new BettingHouse("Football World Cup Winner");

let playerOne = createPlayer("Nikola", "Mitic", "6/26/95", "Srbija", 2, CONTINENT, 1050);
let playerTwo = createPlayer("Nenad", "Dimitrijevic", "1/26/89", "Srbija", 2, CONTINENT, 2000);
let playerThree = createPlayer("Pera", "Peric", "5/26/96", "Srbija", 2, CONTINENT, 1500);
let playerFour = createPlayer("Mika", "Mikic", "7/26/91", "Srbija", 2, CONTINENT, 1700);

let bettingPlaceOne = createBettingPlace("Srbija", "Beograd", 11000, "Nemanjina", 4);
let bettingPlaceTwo = createBettingPlace("Srbija", "Nis", 18000, "Dusana Radovica", 22);

bettingPlaceOne.addPlayers(playerOne);
bettingPlaceOne.addPlayers(playerTwo);
bettingPlaceTwo.addPlayers(playerThree);
bettingPlaceTwo.addPlayers(playerFour);

bettingHouseOne.addBettingPlace(bettingPlaceOne);
bettingHouseOne.addBettingPlace(bettingPlaceTwo);



console.log(bettingHouseOne.getData());




