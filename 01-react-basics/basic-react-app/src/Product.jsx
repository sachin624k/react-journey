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

function Product({ title, price, features }) {
    let styles = { backgroundColor: price > 800 ? "lightgreen" : "" };

    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            {price > 800 && <p>Discount of 5%</p>}
        </div>
    )
}

export default Product;