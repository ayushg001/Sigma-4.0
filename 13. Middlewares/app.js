const express = require("express");
const app=express();
const ExpressError = require("./ExpressError");

// app.use((req,res ,next) => {
//     console.log("hi , ai am fist middleware");
//     next();
//     console.log("this is after next");
// });

// app.use((req,res ,next) => {
//     console.log("hi, i am second middleware");
//     next();
// });


//logger - morgan
// app.use( (req,res,next) => {
//     req.time =  new Date(Date.now()).toString();
//     console.log( req.method , req.hostname , req.path , req.time);
//     next();
// })

// app.use( "/api" , (req,res,next) => {         // token  authentication
//     let { token } = req.query;
//     if ( token === "giveaccess"){
//         next();
//     }
//     res.send("access denied")
// })


 let checkToken =     (req,res,next) => {
    let { token } = req.query;
    if ( token === "giveaccess"){
        next();
    }
    throw new ExpressError( 401 ,"access denied")
 }


app.get("/api" ,checkToken, (req,res) => {
    res.send("hi. i am root");
});

app.listen( 8080 , () => {
    console.log("server listening to port 8080");
});