// function saveToDB(data){
//     return new Promise((resolve,reject) => {
//         let intSpeed = Math.floor(Math.random() *10) +1;
//         if (intSpeed > 4){
//             resolve("success :  data is saved");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }
// saveToDB("ayush")
// .then( (result) => {
//     console.log("data1 saved")
//     console.log("Result of promise is :" , result)
//     return saveToDB("apnacollege")
// })
// .then( (result) =>{
//     console.log("data2 saved")
//     console.log("Result of promise is :" , result)
//      return saveToDB("sigma4.0")
// })
// .then( (result) =>{
//     console.log("data3 saved")
//     console.log("Result of promise is :" , result)
// })
// .catch( (error) => {
//     console.log("promise is rejected")
//     console.log("Error of promise is :" , error)
// });

let h1 =  document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            h1.style.color = color
            resolve(` color changed to ${color}`);
        } , delay );
    });
}

changeColor("red" , 1000)
.then( (result) => {
    console.log("Result of promise is :" , result)
    return changeColor("orange" , 1000)
})
.then( (result) =>{
    console.log("Result of promise is :" , result)
    return changeColor("green" , 1000)
})
.then( (result) =>{
    console.log("Result of promise is :" , result)
    return changeColor("yellow" , 1000)
})
.then( (result) =>{
    console.log("Result of promise is :" , result)
    return changeColor("blue" , 1000)
})
.then( (result) =>{
    console.log("Result of promise is :" , result)
})
.catch( (error) => {
    console.log("promise is rejected")
    console.log("Error of promise is :" , error)
});