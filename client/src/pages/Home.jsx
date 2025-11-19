import "../assets/css/home.css";

function Home() {
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
      <section class="products">
        <h2 class="title">Featured Products</h2>

        <div class="product-container">
          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 1</h3>
            <p class="price">$49</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 2</h3>
            <p class="price">$59</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 3</h3>
            <p class="price">$39</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 4</h3>
            <p class="price">$29</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 5</h3>
            <p class="price">$69</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 6</h3>
            <p class="price">$19</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 7</h3>
            <p class="price">$89</p>
            <button class="btn">Add to Cart</button>
          </div>

          <div class="product-card">
            {/* <img src="https://via.placeholder.com/250" alt=""> */}
            <h3>Product 8</h3>
            <p class="price">$99</p>
            <button class="btn">Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
