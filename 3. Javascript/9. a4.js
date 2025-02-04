// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt('enter the number you want to delete');
// num = parseInt(num);
// for( let  i = 0 ; i<= arr.length  ; i++){
//     if( arr[i] == num){
//         arr.splice(i , 1);
       
//     }
// }

//     console.log(arr);


// let n1 =2871520;
// let count = 0;
// while( n1 !== 0){
//     n1 = Math.floor(n1/10);
//     count++;
// }
// console.log(count);

// let n1 =281453545254;
// let sum =0;
// // let copy=n1;
// while( n1 > 0 ){
//     let digits = n1 % 10;
//     sum = sum + digits;
//     n1 = Math.floor(n1/10);
// }
// console.log(sum);

// let num  = 7;
// let factorial =1;
// for( i = 1 ; i <= num ; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

let arr2 = [1,2,3,4,5,6,7];
let largest = 0;
for( let i = 0 ; i <= arr2.length ; i++){
    if(largest < arr2[i]){
         largest = arr2[i];
    }
}
console.log(largest);
