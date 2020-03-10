"use strict"

// (function () {
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
function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}
function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}
function BettingPlace(address) {
    this.address = address;
    this.listOfPlayer = [];
    this.numberOfPlayers = 0;
}
function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlace = [];
    this.numberOfPlayers = 0;

}
var CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",

});
Person.prototype.getData = function () {
    var day = this.dateOfBird.getDate();
    var month = this.dateOfBird.getMonth() + 1;
    var year = this.dateOfBird.getFullYear();
    return this.name + " " + this.surname + ", " + day + "." + month + "." + year + ".";
}
Person.prototype.getYearsOld = function(){
    var year = this.dateOfBird.getFullYear();
    var year1 = new Date().getFullYear();
    return year1 - year + " years";
}

Address.prototype.getData = function () {
    return this.street +" " + this.number + ", " + this.postalCode +" " + this.city + ", " + (this.country.name.slice(0,2)).toUpperCase();
}
Player.prototype.getData = function(){
    return (this.country.name.slice(0,2)).toUpperCase() + ", " + this.betAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.getYearsOld();
}

BettingPlace.prototype.getData = function() {
    return this.address.street + ", " + this.address.postalCode + " " + this.address.street + ", sum of all bets:" + this.numberOfPlayers;
}


var createPlayer = function( name, surname, dateOfBird, countryName, odds, continent, bet){
    var per = new Person(name, surname, dateOfBird);
    var coun = new Country(countryName, odds, continent);
    return new Player(per, bet, coun);
}

var createBettingPlace = function (country, city, postalCode, street, number) {
    var add = new Address(country, city, postalCode, street, number);
    return new BettingPlace(add);
  }


var personOne = new Person("nenad", "dimitrijevic", "1/23/89")

var countryOne = new Country("Srbija", 2, CONTINENT);

var addresOne = new Address(countryOne, "Beograd", 11000, "Nemanjina", 4)

var playerOne = new Player(personOne, 1050, countryOne);

var bettingPlaceOne = new BettingPlace(addresOne);

console.log(playerOne.getData());




    // })()