import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["49,333", "85000", "32,000", "29,999"];
    let newPrices = ["39,999", "69999", "27,999", "24,999"];
    let description = [["Best for Rest", "Laptop for all"],
                       ["Powerful performance", "Gaming Laptop"],
                        ["Lightweight and portable", "Everyday use"],
                        ["Affordable and reliable", "Budget Laptop"]
    ];

    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;