let arr = [1,2,3,4];
const arrayAverage = (arr) => {
    let sum =0;
    for( let num of arr ){
        sum +=num;
        }
        return sum/arr.length;
} ;
console.log(arrayAverage(arr));


let n = 3;
let isEven = (n) => {
    if(n%2==0){
        return "even";
    }
        else{
            return "odd";
        }
    
}
console.log(isEven(n));
