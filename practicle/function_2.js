/*****    9    ******/

// function separStr(str, separator) {
//     if (separator === undefined) {
//         separator = "-";
//     }
//     var newStr = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             newStr = newStr + separator;
//         } else {
//             newStr = newStr + str[i];
//         }
//     } return newStr;
// }
// var result = separStr("Hirurzi u akciji", "*");
// console.log(result);

/*****   10    ******/

// function addPunkt(str, n) {
//     var newStr = "";
//     for (var i = 0; i < n; i++) {
//         newStr = newStr + str[i];
//     } return newStr + "...";
// }
// var result = addPunkt("Hirurzi su najjaci", 5);
// console.log(result);

/*****    11    ******/

// var a = ["1", "21", undefined, "42", "1e+3", Infinity];

// function convertIntoNumbers(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== "string" || typeof arr[i] !== 'number') {
//             newArr = parseInt(arr[i])
//         }
//     } return newArr;
// }
// var result = convertIntoNumbers(a);
// console.log(result);
