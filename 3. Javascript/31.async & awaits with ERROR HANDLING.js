function getNum(){
    return new Promise ( (resolve ,  reject ) =>{
        setTimeout(  () =>{
            let ranNum = Math.floor(Math.random() * 10) +1;
            console.log(ranNum);
            resolve();
        }, 1000);
    } )
}

async function demo() {
    await getNum();
    await getNum();
}

let h1 =  document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            let num =   Math.floor(Math.random() * 5) +1;
            if ( num > 3) {
                reject("promise rejected")
            }

            h1.style.color = color
            resolve(` color changed to ${color}`);
        } , delay );
    });
}

async function colorFun(){
    try{
        await  changeColor("orange" , 1000);
        await  changeColor("green" , 1000);
        await  changeColor("yellow" , 1000);
        await  changeColor("blue" , 1000);
    } catch(error){
        console.log("error caught");
        console.log(error);
    }
 let a=4;
 console.log(a);
}
// changeColor("red" , 1000)
// .then( (result) => {
//     console.log("Result of promise is :" , result)
//     return 
// })
// .then( (result) =>{
//     console.log("Result of promise is :" , result)
//     return changeColor("green" , 1000)
// })
// .then( (result) =>{
//     console.log("Result of promise is :" , result)
//     return changeColor("yellow" , 1000)
// })
// .then( (result) =>{
//     console.log("Result of promise is :" , result)
//     return changeColor("blue" , 1000)
// })
// .then( (result) =>{
//     console.log("Result of promise is :" , result)
// })
// .catch( (error) => {
//     console.log("promise is rejected")
//     console.log("Error of promise is :" , error)
// });