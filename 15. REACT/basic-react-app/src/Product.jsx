import "./Product.css";

function Product({title , price  = 1 , features }){  // destructuring

    
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> Price : {price}</h5>
           {price >= 30000 ? <p>Discount of 5%</p> : null}
            
        </div>
    )
}

export default Product