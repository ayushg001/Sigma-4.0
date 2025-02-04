const express = require("express");
const app = express(); 
//executing express , storing its value in app(obj)
// console.dir(app);

let port = 3000;
app.listen( port , () => {
    console.log(`app is listening on ${port}`)
})

// app.use(  (req,res) =>{
//     console.log("request received");
//             // res.send("this is a basic response");
//             // res.send({
//             //     name:"apple",
//             //     color: "red"
//              // });
//     let code = "<h1> Fruits </h1> <ul> <li>apple </li> <li> orange </li> </ul>";
//     res.send(code);
// });

// app.get("/" , (req , res) =>{
//     res.send("you contacted root path , enjoy")
// });
// app.get("/search" , (req , res) =>{
//     res.send("you contacted search path")
// });
// app.get("/home" , (req , res) =>{
//     res.send("you contacted home path")
// });
// app.get("*" , (req , res) =>{
//     res.send("This path does not exist")
// });

// app.post("/" , (req , res) =>{
//     res.send("you sent a post request to root")
// });

app.get("/:username/:id" , (req , res) =>{
    let { username , id } = req.params;
    let content = `<h1>welcome to the page of${username}, id ${id} </h1>`
    res.send(content)
});