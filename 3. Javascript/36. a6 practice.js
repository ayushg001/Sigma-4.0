// let a =3;
// let arr =[1,2,3,4,5,6];
// function fun(arr){
//     for( let i = 0  ;  i<arr.length ;  i++){
//         if( arr[i]>a ){
//             console.log(arr[i])
//             // return arr[i]
//         }

//     }
// }
// console.log(fun(arr))

let str =  "aacdabceffh";
let ans = "";

function fun(str){
        for(let i ; i<str.length;i++){
            let a=str[i] ; 
            if(str[i] =a){
                ans = "" + str[i];
            }
        }
        return ans;
}
console.log(fun(str))
