const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")

app.set("views" , path.join(__dirname , "views"));
app.set( "view engine" , "ejs"); 
app.use(express.static(path.join(__dirname , "public")))
app.use(express.urlencoded({extended :  true }));
app.use(methodOverride("_method"));

main()
.then( () => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}




//index route 
app.get( "/chats" ,  async (req,res,next) => {
    try{
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs" , { chats})
    }
    catch(err){
        next(err)
    }
    
} )

//add new chat
app.get( "/chats/new" , (req,res) => {
    // throw new ExpressError(404 , "page not found")
    res.render("newchat.ejs")
} )

app.post("/chats" , async (req,res,next) => {
    try{
        let { from ,  to , msg } = req.body;
        let newChat = new Chat({
            from : from,
            to : to,
            msg : msg,
            created_at : new Date()
        });
    await newChat.save()
    
    res.redirect("/chats");

    }
    catch(err){
        next(err)
    }
    
} );

//show route 
app.get( "/chats/:id/" , async (req,res, next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
           next(new ExpressError(404 , "chat not found"));
        }
        res.render("edit.ejs" , {chat} )
    }
   catch(err) {
    next(err)
   }
});


//Edit Route
app.get( "/chats/:id/edit" , async (req,res,next) => {
try{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // console.log(chat)
    res.render("edit.ejs" , {chat} )
} catch(err){
    next(err)
}
   
})

//update route
app.put( "/chats/:id" , async (req,res,next) => {
try {
    let { id } = req.params;
    let { msg } = req.body;
    console.log(msg)
    let updatedChat =  await Chat.findByIdAndUpdate( id, { msg : msg });
    res.redirect("/chats");
}
catch(err) {
    next(err)
}
    
})

//delete chat   
app.delete("/chats/:id" , async (req,res,next) =>{
    try{
        let { id } = req.params;
        let delChat = await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    } catch(err) {
        next(err)
    }
   
})

app.get(  "/" , (req,res) => {
    res.send("working root");
})

app.use( (err,req,res,next) => {
    console.log(err.name);
    next(err);
})

app.use( (err, req, res, next) => {
    let { status=500 , message="some error occured"} = err;
    res.status(status).send(message);
});

app.listen  ( 8080 , () => {
    console.log("server is listening")
});