"use strict";
 
function WebApp(name, url, technologies, licence, star){
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.star = star;
}
WebApp.prototype.getData = function(){
    return "Name: "+this.name+"\nUrl: "+this.url+"\nTechnology: "+this.technologies+"\nLicence: "+this.licence+"\nStars: "+this.stars;
}
WebApp.prototype.reactBased = function(){
    if(this.technologies === "React"){
        return true;
    }
    return false;
}



function MobileApp(name, platforms, licence, stars){
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}
MobileApp.prototype.getData = function(){
    return "Name: "+this.name+"\nPlatform: "+this.platforms+"\nLicence: "+this.licence+"\nStars: "+this.stars;
}
MobileApp.prototype.forAndroid = function(){
    if(this.platforms === "Android"){
        return true;
    }
    return false;
}

Object.prototype.isCCLicence=function(){
    if(this.licence==="CC"){
        this.stars++;
        return true;
    }
    return false;
}
Object.prototype.showStars=function(){
    return this.stars;
}

var webApp1 = new WebApp("GoogleMaps", "www.googlemaps.com","React","CC",3);
var mobileApp1 = new MobileApp("BitApp", "Android", "CC", 5);

console.log(mobileApp1.isCCLicence());
console.log(mobileApp1.showStars());