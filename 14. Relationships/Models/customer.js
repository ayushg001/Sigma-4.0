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

const Order = mongoose.model("Order" , orderSchema);
const Customer = mongoose.model("Customer" , customerSchema);


const findCustomer = async() => {
    let result = await Customer.find({}).populate("orders");
console.log(result[0])
}
findCustomer()
// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name : "Rahul Kumar",
//     });

//     let order1 = await Order.findOne({ item : "Milk"});
//     let order2 = await Order.findOne( { item : "Chocolate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//      let res = await cust1.save();
//      console.log(res);
// };
// addCustomer();


// const addOrders = async () => {
//     let res =  await Order.insertMany([
//     { item : "Milk", price : 68 },
//     { item : "Bread", price : 45 },
//     { item : "Chocolate", price : 45 },
// ] );
//    console.log(res)
// }

// addOrders()