/*********   1   **********/

// function str(str1, str2, n){
//     var newStr = [];
//     if(n === undefined){
//         newStr = str2 + str1;
//     }
//     for(var i = 0; i <str1.length;i++){
//         if(i === n){
//             newStr = newStr + str2;    
//         }
//         newStr = newStr + str1[i];
        
//     }
//     return newStr;
// }

// var res = str("Nikola studira", "Bit", 7);
// console.log(res);



/*********   2   **********/

// function joinElIntoString(arr) {
//     var newStr = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'undefined' && isFinite(arr[i]) && arr[i] !== null) {
//             newStr = newStr + arr[i] + ",";
//         }
//     }
//     return newStr;
// }
// var result = joinElIntoString([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(result);





/********** 3    ***********/


// var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// var res = [];
// function arr(array) {
//     for (var i = 0; i < a.length; i++) {
//         if (array[i]) {
//             res[res.length] = a[i];
//         }

//     }
//     return res;

// }
// var b = arr(a);
// console.log(b);




/********* 4  *******/


// function reverses(numb) {
//     var a;
//     var b = "";
//     a = numb + "";
//     for (var i = a.length - 1; i >= 0; i--) {
//         b = b + a[i];
//     }
//     return b;

// }
// var result = reverses(12345);
// console.log(result);


/********** 5 *********/


// var a = [7, 9, 0, -2];
// function lastElement(arr, b) {
//     if (b === undefined) {
//         return arr[arr.length - 1];
//     }
//     var result = [];
//     for (var i = arr.length - b; i < arr.length; i++) {
//         result[result.length] = arr[i];
//     }
//     return result;

// }
// var n = lastElement(a, 3);
// console.log(n);

/********** 6 **********/


// function arr(num, a) {
//     if (a === undefined) {
//         a = null;
//     }
//     var result = [];
//     for (var i = 0; i < num; i++) {
//         result[result.length] = a;

//     }
//     return result;


// }

// var n = arr(5, 0);
// console.log(n);


/***********    7   ************/


// function perfect(a) {
//     var sum = 0;
//     for (var i = 0; i < a; i++) {
//         if (a % i === 0) {
//             sum = sum + i;
//         }
//         if (sum === a) {
//             return true;
//         }
//     }
//     return false;
// }

// var res = perfect(28);
// console.log(res);


/*********  8  *********/




