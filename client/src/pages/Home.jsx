import { useEffect, useState } from "react";
import "../assets/css/home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error Fetching Products.", err));
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      if (data.ok) {
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Latest Fashion Trends</h1>
          <p>
            Shop premium clothing and accessories with unbeatable quality and
            style.
          </p>
          <button className="hero-btn">Shop Now</button>
        </div>

        <div className="hero-image">
          <img src="./images/banner.webp" alt="fashion banner" />
        </div>
      </section>
      {/* hero end */}
      <section className="products">
        <h2 className="title">Featured Products</h2>

        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">Rs. {product.price}</p>
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
