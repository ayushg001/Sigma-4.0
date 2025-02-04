const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const exp = require('constants');
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { error } = require('console');
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use((express.urlencoded( { extended :  true }))); //parsing the data
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views" ))

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'ayush',
  });
  let getRandomUser = () =>  {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

  //home route
  app.get( "/" , (req,res) => {
    let q = "select count(*) from user";
    try{
    connection.query(q , (err , result ) => {
      if (err) throw err;
      console.log(result[0]["count(*)"]);
      let count = result[0]["count(*)"];
      res.render("home.ejs" , {count})
    })
  }
  catch (err) {
    console.loge(err);
    res.send("some error found in database")
  }
  });

//show route
app.get( "/user" , (req,res) => {
  let q = "select* from user";
  try{
  connection.query(q , (err , users ) => {  
    if (err) throw err;
    console.log(users);
    res.render("showusers.ejs" , {users})
  })
}
catch (err) {
  console.loge(err);
  res.send("some error found in database")
}
})

//edit route
app.get("/user/:id/edit" , (req , res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}'`;
  console.log(id);
  try{
    connection.query(q , (err , result) => {  
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs" , { user});
    })
  }
  catch (err) {
    console.loge(err);
    res.send("some error found in database")
  }

})

//update (DB) Route
app.patch("/user/:id" , (req,res) => {
  let { id } = req.params;
  let { password : formPass  , username : newUsername} = req.body;
  let q = `select * from user where id = '${id}'`;
  console.log(id);
  try{
    connection.query(q , (err , result) => {  
      if (err) throw err;
      let user = result[0]; //user info
      if ( formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = ` update user set username= '${newUsername}' where id = '${id}'`;
        connection.query( q2 , (err , result) => {
          if (err) throw error
          res.redirect("/user");
        })
      }
    })
  }
  catch (err) {
    console.loge(err);
    res.send("some error found in database")
  }
})

//adding new user page
app.get ( "/user/new" , (req,res) => {
  res.render("newuser.ejs")
})

app.post( "/user" , (req,res) => {
  let { username , email , password } = req.body;
  let id = uuidv4();
  let q = `insert into user ( id , username , email , password ) values ( "${id}", "${username}" , "${email}" , "${password}");`;
  try{
    connection.query(q , (err , result ) => {
      if (err) throw err;
      console.log(result);
      res.redirect("/user");
    })
  }
  catch (err) {
    console.loge(err);
  }
  console.log(username)
  console.log(email)
  console.log(password)
  //  res.send("submitted")
})  

//server start
app.listen("8080" , () => {

    console.log("server is listening")
} );

// try{
//     connection.query(q ,[data] , (err , result ) => {
//       if (err) throw err;
//       console.log(result);
//     })
//   }
//   catch (err) {
//     console.loge(err);
//   }

//   connection.end();


