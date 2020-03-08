"use strict";

function Person(name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullName = function(){
    return this.name + " " + this.surname;
}



function Employee(name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype.getData = function(){
    return this.name +" "+this.surname + this.salary;
}
Employee.prototype.getSalary = function(){
    return this.salary;
}
Employee.prototype.increaseSalary = function(){
    this.salary=this.salary*1.1;
    return "Earnings increased by 10%!";
}



function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function(){
    return this.specialization;
}



function Manager(name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary)
    this.department = department;
}
Manager.prototype.getDepartment = function(){
    return this.department;
}
Manager.prototype.changeDepartment = function(newDepartment){
    this.department = newDepartment;
}



Developer.prototype=Object.create(Employee.prototype);
Manager.prototype=Object.create(Employee.prototype);


Developer.prototype.constructor=Developer;
Manager.prototype.constructor=Manager;


var employee1=new Employee("Nikola", "Mitic", "programer", 700);

var developer1=new Developer("Nenad", "Dimitrijevic","developer", 1500, "JS");

var manager1=new Manager("Pera", "Peric","manager", 2000, "sales");


console.log(manager1.getSalary())
console.log(manager1.increaseSalary());
console.log(manager1.getData())

