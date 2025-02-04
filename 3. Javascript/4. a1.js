let num = 20;
if(num %  10 == 0){
    console.log('good')
}
else{
    console.log('bad')
}

// let name = prompt("enter name");
// let age = prompt("enter age");
// alert(`${name} is ${age} years old.`);

let str = 'anaconda';
if( (str[0] =='a' || str[0] == 'A' )  && str.length > 5   ){
    console.log("a good string")
}

let a = 5;
let b = 3;
let c = 50;
if(a>b){
    if(a>c){
        console.log("a is largest")
    }
}
if(b>a){
    if(b>c){
        console.log("b is largest")
    }
}
else if(c>a){
    if(c>b){
        console.log("c is largest")
    }
}

let x = 32;
let y = 47852;
if ( x % 10  ==  y % 10  ){
    console.log("same")
}