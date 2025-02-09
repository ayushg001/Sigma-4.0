const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing =   require("./models/listing.js");

main()
.then(  (res) => {
    console.log("Db is connected");
})
.catch( (err) => {
    console.log("err")
});

async function main() {
    await mongoose.connect(MONGO_URL);
};


app.get("/" , (req,res) =>{
    res.send("hi");
});

app.get("/testlisting" , async (req,res) => {
    let sampleListing = new Listing({
        title : "My new Villa",
        description : "By the beach",
        price : 200000,
        location : "Calangute , Goa",
        country : "INDIA"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("testing succesfull")
})

app.listen( 8080 , () => {
    console.log("server is listening");
});