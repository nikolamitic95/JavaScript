/*****       1     ********/

// function isString(input) {
//     if (typeof input === "string"){
//         return true;
//     }
//     return false;
// }
// var result = isString("nikola");
// console.log(result);

/******      2     *******/

// function isBlank(input) {
//     if (typeof input !== "string") {
//         return false;
//     }
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] !== " ") {
//             return false;
//         }
//     }

//     return true;
// }

// var result = isBlank(12);
// console.log(result);

/*******    3     ******/

// function concatStr(str, n) {
//     var newStr = "";
//     for (var i = 0; i < n; i++) {
//         newStr = newStr + str;
//     }
//     return newStr;
// }

// var result = concatStr("ha", 5);
// console.log(result);

/******    4     *******/

// function countStr(str, letter) {
//     var a = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             a++;
//         }

//     }
//     return a;
// }


// var result = countStr("Nikolaaoooaa", "o");
// console.log(result);

/********     5    ******/

// function firstPosition(str, n) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }

// var result = firstPosition("nikolka", "k");
// console.log(result);

/********     6    ********/

// function lastPosition(str, n) {
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }


// var result = lastPosition("nikolakok", "k");
// console.log(result);

/*******    7    ********/

// function convertStr(str) {
//     var a = [];
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             a[a.length] = null;
//         } else {
//             a[a.length] = str[i];
//         }
//     }
//     return a;
// }

// var result = convertStr("My random string");
// console.log(result);

/*******     8     *******/

// function isPrime(numb) {
//     for (var i = 2; i < numb; i++) {
//         if (numb % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// var result = isPrime(12);
// console.log(result);

/*****    9     *****/

// function sep(a, b){
//     if(b === undefined){
//         b = "-"
//     }
//     var res = "";
//     for(var i = 0; i<a.length;i++){
//         if(a[i] === " "){
//          res = res+b;
//         }
//         else{
//             res = res + a[i];
//         }  
//     }
//     return res;
// }

// var n = sep("nikola je doktor", "*");
// console.log(n);



/*********   10   **********/


// function str(a, b){
//     res = "";
//     for(var i = 0; i<b;i++){
//         res = res + a[i];   
//     }
//     return res + "...";
// }

// var n = str("nikola je dr", 5);
// console.log(n);



/*********   11   **********/


// function filterNonNumbers(arr) {
//     var numArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(typeof arr[i] === "string"){
//             numArray[numArray.length] = parseFloat(arr[i]);
//         }
        
//     }
//     return numArray;
// }
//     var result = filterNonNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
//     console.log(result);
    


/*********   12   **********/


// function penzija (a, b){
//     var ret;
//     var age;
//     if(b === "male"){
//         age = 65;
//     }
//     else{
//         age = 60;
//     }
//     ret = age - (2020 - a);
//     if(ret<0){
//         return "u penziji";
//     }
//     return ret;
// }

// var res = penzija(1995, "male");
// console.log(res);



/*********   13   **********/

// function humanizeNumber(num) {
//     if (typeof num == "undefined") {
//         return;
//     }

//     if (num % 100 >= 11 && num % 100 <= 13) {
//         return num + "th";
//     }

//     switch (num % 10) {
//         case 1:
//             return num + "st";
//         case 2:
//             return num + "nd";
//         case 3:
//             return num + "rd";
//     }
//     return num + "th";
// }


// console.log(humanizeNumber(12));

