const express = require("express");
const app=express();


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
    abcd = abcd;
});

app.use( (err , req ,res ,next ) =>{      //custom error handeler
    // console.log(err);
    console.log("--------error1------")
    next(err);
});

app.use( (err , req ,res ,next ) =>{      //custom error handeler
    console.log("--------error2------")
    next(err);
});

app.listen( 8080 , () => {
    console.log("server listening to port 8080");
});