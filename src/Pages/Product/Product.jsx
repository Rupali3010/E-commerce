import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_to_basket } from "./../../redux/Action/Action";

const Product = ({
  id,
  title,
  price,
  rating,
  specification,
  detail,
  image,
}) => {
  let dispatch = useDispatch();
  let onAddItem = () => {
    let item = {
      id,
      title,
      price,
      rating,
      specification,
      detail,
      image,
    };
    dispatch(add_to_basket(item));
  };
  return (
    <div className="bg-white mt-3 rounded-md   border-[2px] border-gray px-6 py-3  rounded overflow-hidden shadow-lg">
      <div>
        {/* img */}
        <div>
          <img className="w-40 h-40 mx-8" src={image} alt="" />
        </div>
        {/* text */}
        <div className="flex-wrap mt-4 ">
          <Link to={`/product/${id}`}>
            <p className=" text-base w-60 ">{title}</p>
          </Link>
          <div className="flex mt-2">
            <p>
              <strong>Rs</strong>
              <strong>{price}</strong>
            </p>
          </div>
          <div className="flex mt-1 ">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p
                  className="text-yellow-500 font-extrabold text-lg "
                  key={index}
                >
                  ⭐
                </p>
              ))}
          </div>
          <div className="mt-5">
            <button
              className="w-[90px] h-10 rounded-md bg-[#f8c100]"
              onClick={onAddItem}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
