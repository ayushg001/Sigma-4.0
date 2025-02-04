// let arr = [1, 2, 3, 4, 5, , 6, 7, 8, 9];
// let num = 3;
// let newarr = [];
// function fun1(arr, num) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (num < arr[i]) {
//        console.log(arr[i]);
//     }
//   }
// }
// fun1(arr ,num);


// let country = ["Australia","Germany","United States of America"];

// function cn(country){
//     let ansIdx = 0;
//     for( let i = 0 ; i < country.length ; i++){
//         let ansLen = country[0].length;
//         let currLen = country[i].length;
//         if( currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(cn(country));

let str = "apnacollege";
function check(str){
let count = 0;
    for( i = 0 ; i < str.length ; i++){
        if( 
            str.charAt(i)=="a" ||
            str.charAt(i)=="e" ||
            str.charAt(i)=="i" ||
            str.charAt(i)=="o" ||
            str.charAt(i)=="u"
        )
        {
            count++;
        }
    }
    return count;
}
console.log(check(str));