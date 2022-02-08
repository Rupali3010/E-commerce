import React from "react";
import { useDispatch } from "react-redux";
import { removeBasket } from "../../redux/Action/Action";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(removeBasket(id));
  };
  return (
    <div className="flex ">
      <div className="w-2/5 my-6 ml-20">
        <img src={image} alt="" />
      </div>
      <div className="ml-6 my-32">
        <p className="font-bold text-lg w-full">{title}</p>
        <p className="my-6 text-lg">
          <strong>Rs</strong>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p
                className="text-yellow-500 font-extrabold text-lg flex"
                key={index}
              >
                ⭐
              </p>
            ))}
        </div>
        <button
          className="my-6 bg-zinc-800 text-white h-10 rounded-md w-32"
          onClick={removeItem}
        >
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
