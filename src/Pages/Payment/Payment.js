import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector, useDispatch } from "react-redux";
import CheckoutProduct from "./../Checkout/CheckoutProduct";
import { getBasketTotal } from "./../Checkout/BasketTotal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { db } from "./../../firebase";
import basketReducer from "./../../redux/Reducer/CartReducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axios } from "axios";

const Payment = () => {
  const { basket, user } = useSelector(state => state.basketReducer);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.basketReducer.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  let handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ payment_intent }) => {
        //....
        setSucceded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
      });
  };

  let handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment bg-white">
      <div className="payment-container">
        <h1 className="text-center text-3xl p-2 font-extrabold bg-[#fff] border-b-2 border-b-solid border-b-gray-400">
          Checkout
          {
            <Link to="/checkout" className="no-underline">
              {basket.length} items
            </Link>
          }
        </h1>
        <div className="paymen-section flex p-5  border-b-2 border-b-solid border-b-gray-400">
          <div className="payment-title flex-[0.2]">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address flex-[0.8]">
            <p>{user && user.email}</p>
            <p>Sr.No.229/1,Pimpri</p>
            <p>Pune,India</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items flex-[0.8] w-[50%] h-[65%] mt-8">
            {basket &&
              basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details flex-[0.8]">
            <form className="max-w-sm" onSubmit={handleSubmit}>
              <CardElement />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <h3 className="pb-5">Order Total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs"}
                />
                <button
                  className="bg-[#f0c14b] rounded-sm w-1/2 h-7 border-2 border-solid font-extrabold mt-2 border-black text-white"
                  disabled={processing || disabled || succeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
