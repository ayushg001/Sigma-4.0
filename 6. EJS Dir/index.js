const express = require("express");
let app = express();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname , "/public/css")));
app.use(express.static(path.join(__dirname , "/public/js")));

app.set("view engine" , "ejs");
app.set( "views" , path.join(__dirname  , "/views") );
app.get( "/" , (req,res) =>{
    res.render("home");
});

app.get( "/rolldice" , (req,res) =>{
    let dicevalue = Math.floor(Math.random() * 6) +1;
    res.render("rolldice" , {dicevalue});
});

// app.get( "/ig/:username" , (req,res) =>{
//     let followers = [ "Marty Byrde" , "Ozwald Cobb", "Joel" , "Geralt of Rivia" , "Steve Harrington"]
//     let { username } = req.params;
//     res.render("instagram" , { username , followers});
// });

app.get( "/ig/:username" , (req,res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data){
        res.render("instagram2" , {data}); 
    } else{
        res.render("error")
    }
    
});

app.listen( port, () => {
    console.log("server is listening")
});

