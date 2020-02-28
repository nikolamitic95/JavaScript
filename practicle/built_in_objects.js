
// function duplicate(arr) {
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         arr1.push(arr[i])
//         arr1.push(arr[i])
//     }
//     return arr1;
// }

// var res = duplicate([2, 4, 7, 11, -2, 1]);
// console.log(res);

/////////////////// 2 ///////////////////

// function removeElement(arr) {
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr1.indexOf(arr[i]) === -1) {
//             arr1[arr1.length] = arr[i];
//         }

//     }
//     return arr1.sort(function (a, b) {
//         return a - b
//     });
// }


// var res = removeElement([8, 13, 8, 9, 12, 8, 1, 1, 4, 13])
// console.log(res);

////////////////  3 ////////////////

// function oddNumber(arr) {
//     return arr.length % 2 !== 0
// }
// var res = oddNumber([1, 2, 9, 2, 1]);
// console.log(res);

///////////// b ///////////////

// function middleElement(arr) {
//     var count = 0;
//     if (arr.length % 2 === 0) {
//         return "Array has even number of elements"
//     }
//     var middleIndex = parseInt(arr.length / 2);
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[middleIndex]) {
//             count++
//         }
//     }
//     return count

// }
// var res = middleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]);
// console.log(res);

//////////// 4 ////////////////


// var smallest = function (arr) {
//     var min = arr[0];
//     var index = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             index = i;
//         }
//     }
//     return [min, index];
// }

// var res = new smallest([1, 4, -2, 11, 8, 1, -2, 3]);
// console.log(res);


/////////// 5.a ////////////


// function small(arr, a){
//     var arr1 = [];
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] < a){
//             arr1[arr1.length] = arr[i];
//         }
//     }
//     return arr1
// }

// var res = small([2, 3, 8, -2, 11, 4], 6);
// console.log(res);


////////// 5.b /////////


// var pro =  function (arr, b){
//    for(var i = 0; i<arr.length;i++){
//        var arr1 = [];
//        arr[i].toUpperCase();
//        if(arr[i].slice(1, 3) === b){
//             arr1[arr.length] = arr[i];
//        }
//    }
//    return arr1

// }
// var res = pro(["JavaScript", "Programming", "fun", "product"], "pro");
// console.log(res);


///////// 5.c ////////


/////// 6.a ////////

// var product = [
//     {
//         name: "apples",
//         price: 100
//     },
//     {
//         name: "milk",
//         price: 80
//     },
//     {
//         name: "bananas",
//         price: 150
//     }
// ]


///////b///////


// function sum(arr) {
//     var res = 0;
//     for (var i = 0; i < arr.length; i++) {
//         res += arr[i].price;
//     }
//     return res;
// }
// var result = sum(product);
// console.log(result);

//////c//////


// function average(arr1) {
//     var res = 0;
//     for (var i = 0; i < arr1.length; i++) {
//         res += arr1[i].price;
//     }
//     return res / arr1.length;
// }
// var result = average(product);
// console.log(result);


/////d////////

// function expensive(arr) {
//     var max = arr[0].price;
//     var index = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (max < arr[i].price) {
//             max = arr[i].price;
//             index = i;
//         }
        
//     }
//     return arr[index].name.toUpperCase();
// }
//   var result = expensive(product);
//   console.log(result);


//////// 7.a /////////

// function str(str1){
//    if(str1 === str1.toUpperCase()){
//        return true;
//    }
//    return false;
    
// }

// var result = str("niKoLa");
// console.log(result);

//////// b ///////////


