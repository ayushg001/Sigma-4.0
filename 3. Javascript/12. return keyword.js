let str = ["hi" , "hello", "bye" , "!"]

function concat(str){
    let sum = "";
    for( i = 0 ; i < str.length ; i++){
        sum = sum + str[i];
        
    }
    return sum;
}
console.log(concat(str));