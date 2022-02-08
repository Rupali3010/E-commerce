import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../Checkout/BasketTotal";
import basketReducer from "./../../redux/Reducer/CartReducer";

const SubTotal = () => {
  let navigate = useNavigate();
  const { basket, user } = useSelector(state => state.basketReducer);
  let handleCheckout = () => {
    // e.preventDefault();
    navigate("/payment");
  };
  return (
    <div className="subtotal flex flex-col mt-5 w-72 h-36 p-5 bg-[#f3f3f3] border-2 border-solid border-[#dddddd] rounded-sm">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              SubTotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal-gift flex items-center">
              <input type="checkbox" className="mr-1" />
              This orders contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button
        onClick={handleCheckout}
        className="bg-black rounded-sm w-[100%] h-7 border-2 border-solid mt-2 text-white cursor-pointer border-black"
      >
        Procced to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
