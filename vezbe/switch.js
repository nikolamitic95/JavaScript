// for (var a = 10; a >= 1; a--) {
//     console.log(a);

// }

//1
// for (var a = 1; a <= 15; a++) {
//     if (a % 2 === 0) {
//         console.log("Broj " + a + " je paran")
//     } else {
//         console.log("Broj " + a + " je neparan")
//     }
// }

//2
// var result = 0;
// for (var b = 0; b < 1000; b++) {
//     if (b % 3 === 0 && b % 5 === 0) {
//         result = result + b;
//     }
// }
// console.log(result)

//3
// var a = [2, 5, 6, 7, 10];
// var sum = 0;
// var multi = 1;

// for (var i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//     multi = multi * a[i];
// }
// console.log(sum, multi);

//4
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var y = "";

// for (var i = 0; i < x.length; i++) {
//     y = y + x[i];
// }
// console.log(y);

//5
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];
// for (var i = 0; i < a.length; i++) {
//     for (var b = 0; b < a[i].length; b++) {
//         console.log(a[i][b]);
//     }
// }

//6
// var sum = 0;

// for (var i = 0; i <= 20; i++) {
//     sum = sum + i * i;
// }
// console.log(sum);

// switch (a) {
//     case "Dortmund":
//     case "Berlin":
//     case "Munich":
//         result = "Germany";
//         break;
//     case "Paris":
//     case "Lyon":
//     case "Marseille":
//         result = "France";
//         break;
//     case "Beograd":
//     case "Trgoviste":
//     case "Cuprija":
//         result = "Srbija";
//         break;
//     case "Moscow":
//     case "St.Petersburg":
//     case "Tula":
//         result = "Russia";
//         break;
//     case "Madrid":
//     case "Barcelona":
//     case "Valencia":
//         result = "Spain";
//         break;
//     default:
//         result = "Please choose a different city";
//         break;
// }
// console.log(result);

// var a = 5;
// var b = 4;
// var c = "+";
// result = 0;

// switch (a, b, c) {
//     case "+":
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "/":
//         result = a / b;
//         break;
//     case "*":
//         result = a * b;
//         break;
//     default:
//         result = 0;
//         break;
// }
// console.log(result);
