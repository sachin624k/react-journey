import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={styles}>
            <Product title="MacBook Pro" idx={0} />
            <Product title="iPhone" idx={1} />
            <Product title="iPad" idx={2} />
            <Product title="Apple Watch" idx={3} />
        </div>
    );
}

export default ProductTab;