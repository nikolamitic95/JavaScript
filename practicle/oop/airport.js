var Person = function(name, surname){
    this.name = name;
    this.name = surname;
    this.getData = function(){
        return "Name: " + this.name + "\n" + "Surname: " + this.surname;
    }
}

var Seat = function(number, category){
    this.number = number;
    this.category = category;
    this.getData = function(){
        return "Number: " + this.number + "\n" + "Category: " + this.category;
    }
}

var Passenger = function(){
    this.person = [];
    this.seat = [];
    this.addPerson = function(per){
        this.person.push(per);
    }
    this.addSeat = function(per){
        this.seat.push(per);
    }
    this.toString = function(){
    var dataString = "";
        for (var i = 0; i < this.person.length; i++) {
            dataString += this.person[i].toString() + '\n';
        }
        for (var j = 0; j < this.seat.length; j++) {
            dataString += this.seat[j].toString() + "\n";
        }
        
    }
}