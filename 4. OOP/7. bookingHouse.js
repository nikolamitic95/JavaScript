"use strict"

const CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",

});


function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

function Person(name, surname, dateOfBird) {
    this.name = name;
    this.surname = surname;
    this.dateOfBird = new Date(dateOfBird);
}


Person.prototype.getData = function () {
    let day = this.dateOfBird.getDate();
    let month = this.dateOfBird.getMonth() + 1;
    let year = this.dateOfBird.getFullYear();
    return (`${this.name} ${this.surname}, ${day}.${month}.${year}.`);
}
Person.prototype.getYearsOld = function () {
    let year = this.dateOfBird.getFullYear();
    let today = new Date().getFullYear();
    return (`${today - year} years`);

}


function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}


Player.prototype.getData = function () {
    return `            ${this.country.name.slice(0, 2).toUpperCase()} ${this.betAmount} eur, ${this.person.name} ${this.person.surname}, ${this.person.getYearsOld()}`
    
}


function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}


Address.prototype.getData = function () {
    return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country.name.slice(0,2).toUpperCase()}`       
}

Address.prototype.getFinalData = function () {
    return `      ${this.street}, ${this.postalCode} ${this.city}`
  }


function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.numberOfPlayers = 0;
    this.betSum = 0;
}


BettingPlace.prototype.addPlayers = function (player) {
    this.listOfPlayers.push(player);
    this.numberOfPlayers++;
    this.betSum += player.betAmount;
}
BettingPlace.prototype.getData = function () {
    let playerData = "";
    for (let i = 0; i < this.listOfPlayers.length; i++) {
      playerData += this.listOfPlayers[i].getData() + "\n";
    }
    return playerData;
  }


function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlace = [];
    this.numberOfPlayers = 0;
}


BettingHouse.prototype.addBettingPlace = function (place) {
    this.listOfBettingPlace.push(place);
    this.numberOfPlayers += place.numberOfPlayers;
}
BettingHouse.prototype.getData = function () {
    let bettingHouseData = `${this.competition}, ${this.listOfBettingPlace.length} betting places, ${this.numberOfPlayers} bets`;
    let addressAndPlayersData = "";
    for (let i = 0; i < this.listOfBettingPlace.length; i++) {
      let addressData = `\n${this.listOfBettingPlace[i].address.getFinalData()}, sum of all bets: ${this.listOfBettingPlace[i].betSum}eur`;
      let playersData = `\n${this.listOfBettingPlace[i].getData()}`;

      addressAndPlayersData += (addressData + playersData);
    };

    return `${bettingHouseData}\t${addressAndPlayersData}`;
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

