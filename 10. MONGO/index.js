const mongoose = require('mongoose');

main()
.then( () => {
    console.log("successfull")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
}
const userSchema = new mongoose.Schema( {  //creates a schema
  name : String,
  email : String,
  age : Number
});
const user = mongoose.model("User" , userSchema); // creates a collection

// const user1 = new user({  //creates a document
//   name: "adam",
//   email : "admam@gmail.com",
//   age : 48
// });

// user1.save()  // save the document to mongodb
// .then( (res) => {
//   console.log(res)
// })
// .catch((err) => {
//    console.log(err)
// })

// user.insertMany([        ////creates many documents
//   { name : "tony" , email : "tony@gmail.com", age : 50},
//   { name : "Bruce" , email : "bruce@gmail.com", age : 47},
//   { name : "Peter" , email : "peter@gmail.com", age : 30}
// ]).then( (res) => {
//   console.log(res)
// })
// .catch((err) => {
//    console.log(err)
// })

// user.findById('67a0b89c88141ed168446589')
// .then( (data) => {
//    console.log(data)
// });

// user.updateMany( { name : "adam"  }  , { name : "adamm" } ).then( (res) => {
//   console.log(res)
// } );

// user.findByIdAndUpdate( { name : "adams"  }  , { name : "adamm" } ).then( (res) => {
//   console.log(res)
// } );

user.findByIdAndDelete('67a0bfa6da3bcc55d4de69f5' ).then( (res) => {
  console.log(res)
} );



