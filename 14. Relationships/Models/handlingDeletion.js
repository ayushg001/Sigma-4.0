const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(  (res) => {
    console.log("Db is connected");
})
.catch( (err) => {
    console.log("err")
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

const orderSchema = new Schema({    
    item : String,
    price : Number,
});       

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete" , async () => {
//     console.log("PRE MIDDLEWARE")
// });

customerSchema.post("findOneAndDelete" , async (customer) => {
    if(customer.orders.length){
      let res =   await  Order.deleteMany({ _id : { $in : customer.orders } });
      console.log(res)
    }
});

const Order = mongoose.model("Order" , orderSchema);
const Customer = mongoose.model("Customer" , customerSchema);

const findCustomer = async() => {
    let result = await Customer.find({}).populate("orders");
console.log(result[0])
};

const addCust = async () => {
    let newCust  = new Customer({
        name : "Ozwald Cobbs"
    });

    let newOrder = new Order({
        item : "Burger",
        price : 81
    });

    newCust.orders.push(newOrder);

   await newCust.save();
    await newOrder.save();

    console.log("added new customer")
}
// addCust();

const delCust = async() => {
     let data = await Customer.findByIdAndDelete('67b6d911d1b120e5ec6e0a3c');
     console.log(data)
}

delCust();
