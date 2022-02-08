import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Component/AuthComponent/Login";
import Register from "./Component/AuthComponent/Register";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KD2b1SBKHrmyQHx0xNotPK1X3KqM0nS7bzcTDobbl1yxRfyTxttJhN3zZCSTUWiBdWCBKBb4l87B6U2dh9hNCKz00NVAvCTf2"
);

const App = () => {
  return (
    <Router>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
