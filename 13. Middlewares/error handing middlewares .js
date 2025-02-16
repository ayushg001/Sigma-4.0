const express = require("express");
const app=express();
const ExpressError = require("./ExpressError");


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

app.get(  "/err" , (req,res) => {
    abcd = abcd; //no express error throw
});

app.get(  "/admin" , (req,res) => {
    throw new ExpressError(403 , "access to admin is forbidden")
})

app.use( (err , req ,res ,next ) =>{      //custom error handeler
    console.log("--------error1------")
    let {status = 401 , message } = err;
    res.status(status).send(message);
    // res.send(err)
});

app.use( (err , req ,res ,next ) =>{      //custom error handeler
    console.log("--------error2------")
    next(err);
});

app.listen( 8080 , () => {
    console.log("server listening to port 8080");
});