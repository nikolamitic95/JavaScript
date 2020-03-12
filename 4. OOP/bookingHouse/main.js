"use strict"

const { Country } = require("./Country");
const { Person } = require("./Person");
const { Player } = require("./Player");
const { Address } = require("./Address");
const { BettingPlace } = require("./BettingPlace");
const { BettingHouse } = require("./BettingHouse");

const CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",

});


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




