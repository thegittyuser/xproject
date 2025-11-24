import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import OrderComplete from "../pages/OrderComplete";
import Register from "../pages/Register";
import Footer from "../components/Footer";
function Index() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/ordercomplete" element={<OrderComplete />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default Index;
