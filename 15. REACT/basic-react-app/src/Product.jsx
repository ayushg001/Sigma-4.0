import "./Product.css";

function Product({title , price  = 1 , features }){  // destructur
    console.log(title)
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> Price : {price}</h5>
            <p>{features}</p>
        </div>
    )
}

export default Product