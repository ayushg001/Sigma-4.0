import "./Product.css";

function Product({title , price  = 1 , features }){  // destructuring

   let styles = { backgroundColor : price >= 30000 ? "pink" : "" }; 
    return (
        <div className="Product" style={styles} >
            <h3>{title}</h3>
            <h5> Price : {price}</h5>
           {price >= 30000 ? <p>Discount of 5%</p> : null}
            
        </div>
    )
}

export default Product