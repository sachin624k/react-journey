// Part -1 
// import "./Product.css";

// function Product() {
//     return (
//         <div className="Product">
//             <h3>Product Title</h3>
//             <p>Product Description</p>
//         </div>
//     )
// }

// export default Product;

// Part - 2
import "./Product.css";

function Product({ title, price }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>Price: ${price}</p>
        </div>
    )
}

export default Product;