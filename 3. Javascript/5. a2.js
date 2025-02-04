let arr = [7,9,0,-2];
console.log(arr.slice(0,3));

console.log(arr.slice(arr.length-3));

let arr2 = [];
if(arr2.length== 0){
    console.log("blank array")
}
else{
    console.log("not a blank array")
}

let str= "Ayush";
let idx = 1;
if(str[idx] == str[idx].toLowerCase())
{
    console.log("lower case")
}
else{
    console.log("nooo")
}

let str2 = prompt("enter string");
console.log(` original string : ${str2}`);
console.log(` after trim : ${str2.trim()}`);

let arr3 = [1,2,3,4,5];
// arr.indexOf(item)!=-1
if( arr3.includes(0)){
    console.log("present")
}
else{
    console.log("not present")
}