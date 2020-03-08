"use strict";

/******    1    ******/

// var replaceFirstAndLast = (function(arr){
//     var a = arr[0];
//     var b = arr[arr.length-1];
//     arr[0] = b;
//     arr[arr.length -1] = a;
//     return arr;
// })([4, 5, 11, 9])

// console.log(replaceFirstAndLast);


/******    2    ******/

// var calculate = (function(a, b){
//     return a*b;
// })(5,6)
// console.log(calculate);

/******    3    ******/

// var replaceWithStars = (function(str){
//     var count = 0;
//     var newStr = "";
//     for(var i = 0; i<str.length;i++){
//         if(str[i] === "m" || str[i] === "M"){
//             newStr += "*";
//             count++;
//         }
//         else{
//             newStr += str[i];
//         }
//     }
//     return newStr + ", " + count;
// })("prograMming")
// console.log(replaceWithStars);

/******    4    ******/

// var email = (function(str){
//     var email = "";
//     for(var i = 0; i<str.length; i++){
//         if(str[i] === " "){
//             email += ".";
//         }
//         else{
//             email += str[i];
//         }
//     }
//     return email.concat("@gmail.com");
// })("nikola mitic")

// console.log(email);

/******    5    ******/

// var calculateOctal = (function(numb){
//     return parseInt(numb, 8)
// })(34)
// console.log(calculateOctal);

/******    6    ******/

    // var isValid=(function(password){
    //     for(var i=0; i<password.length; i++){
    //         if(typeof parseInt(password[i])==="number" && password.length >= 6){
                
    //             return "Your password is cool!"
    //         }
            
    //         return "The password is invalid!"
    //     }
    // })("mit40ic");
    
    // console.log(isValid)

    /******    7    ******/

  
    // var filtered=(function(arr){
    //     var newArr=[];
    //     for(var i=0; i<arr.length; i++){
    //         if(arr[i]%2===1){
    //             newArr.push(arr[i]);    
    //         }
    //     }
    //     return newArr;
    // })([2, 8, 11, 4, 9, 3]);
    
    // console.log(filtered);





