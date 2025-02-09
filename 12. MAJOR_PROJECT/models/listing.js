const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    image : {
        filename : {
            type : String,
            default : "defaultimage"
        },
        url : {
            type : String,
            default :   "https://unsplash.com/photos/a-desk-with-a-computer-monitor-and-keyboard-XWPoEJnLQAc",
            set : (v) => v === "" ? 
        "https://unsplash.com/photos/a-desk-with-a-computer-monitor-and-keyboard-XWPoEJnLQAc"  : v },
         //img does not exist / undefined / null /  ( this is when there is no option for img , means for testing)
        
        //img is present but link is empty  ( this condition is for client )
    },
   
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing" , listingSchema); 
module.exports = Listing;   // exporting the model (collection)