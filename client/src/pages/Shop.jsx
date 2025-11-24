import { useEffect, useState } from "react";
import "../assets/css/shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productsapi")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error Fetching Products.", err));
  }, []);

  return (
    <>
      <section className="products">
        <h2 className="title">Our Products</h2>

        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">Rs. {product.price}</p>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
