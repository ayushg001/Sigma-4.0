let greet = "hello"; // global scope

function changeGreet(){
    let greet = "namaste"; // function scope
    console.log(greet);

    function ineerGreet(){
        console.log(greet); // lexical scope
    }
}

console.log(greet);
changeGreet();