// const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
// const { type } = require('os');
// const { title } = require('process');

main()
.then( () => {
    console.log("successfull")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}

const bookSchema =  new mongoose.Schema({                  //creates a schema
    title : {
        type : String,
        required : true,
        maxLength : 15
    },
    author: {
        type : String,
    },
    price: {
        type : Number,
        min : [10 , "too low price "]
    },
    discount : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        enum : ["fiction" , "non-fiction"]
    },
    genre : [String]
});
const Book = new mongoose.model(  "Book" , bookSchema);                //creates a collection
// const book1 = new Book({
//     title: "marvel comicss",
//     price : 500,
//     genre : ["comics" , "superheros" , "fiction"]
// });

// book1.save()
// .then ( (res) => {
//     console.log(res)
// })
// .catch( (err) => {
//     console.log(err)
// });

Book.findByIdAndUpdate ("67a118c66bae35f62a439b13", { price : 8}, { runValidators :  true} )
.then ( (res) => {
    console.log(res);
})
.catch( (err) => {
    console.log(err.errors.price.properties.message);
});