// Part - 1
// import Product from "./Product.jsx";

// function ProductTab() {
//     return (
//         <>
//             <Product />
//             <Product />
//         </>
//     )
// }

// export default ProductTab;

// Part - 2
import Product from "./Product.jsx";

function ProductTab() {
    let options = [ <li>fast</li>, <li>cheap</li> ];
    return (
        <>
            <Product title="Phone" price={500} features={options}/>
            <Product title="Laptop" price={1000} features={options}/>
        </>
    )
}

export default ProductTab;