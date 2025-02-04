let arr= [1,2,3,4,5,-7];
 console.log( arr.map(  (arr) => arr + 5) )

let arr2 = ["adam", "ayush"];
console.log( arr2.map( (arr2) => arr2.toUpperCase()  ) );

const doubleAndReturnArgs = (arr3,...arr) => [
    arr3,
    ...arr.map( (v) => v *2 )
]
console.log( doubleAndReturnArgs([2,3],6,7,8,9,));

let obj1 = {
    name:"ayush",
    age: 20
}
let obj2 = {
    address:"ggn",
    laptop:"pavillion"
}

let mergeObjects = (obj1,obj2) => ({
    ...obj1,...obj2
})
console.log(mergeObjects(obj1,obj2))