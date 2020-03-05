"use strict";

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumbOfMovies = [];
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
    this.getData = function () {
        var str = "";
        var allLength = 0;
        for(var i = 0; i < this.listOfMovies.length; i++){
            str += this.listOfMovies[i].getData();
        }
        for(var j = 0; j<this.totalNumbOfMovies.length;i++){
            singleLength += this.totalNumbOfMovies[i].getData();
            allLength++;
        }
       
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
    this.addProgram = function (program) {
        this.listOfMovies.push(program);
    }
}

var horror = new Genre("Horror");

var movie1 = new Movie("Sparta", horror, 115);

var program = new Program("25.10.2020");
program.addMovie(movie1);
console.log(program.getData());

