import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductData";

import { useDispatch } from "react-redux";
import { add_to_basket } from "./../../redux/Action/Action";
const SingleProduct = () => {
  let { id } = useParams();

  let SingleProduct = products.find(item => item.id === id);
  let dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id: SingleProduct.id,
      rating: SingleProduct.rating,
      title: SingleProduct.title,
      price: SingleProduct.price,
      image: SingleProduct.image,
      specification: SingleProduct.specification,
      detail: SingleProduct.detail,
    };
    dispatch(addItemToBasket(item));
  };
  return (
    <div>
      <div className="h-14 bg-zinc-900 w-full">
        <p className="">
          <img
            src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/catalog/logo.jpg"
            alt="logo"
          />
        </p>
      </div>

      <div className="flex my-[50px] mx-10 rounded overflow-hidden shadow-xl px-4">
        <div className="h-100 w-100">
          <img src={SingleProduct.image} alt="image" />
        </div>

        <div className="mx-7">
          <div className="text-xl font-bold">{SingleProduct.title}</div>
          <div className="flex mt-3">
            {Array(SingleProduct.rating)
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
          <p className="mt-3">
            Price <strong>${SingleProduct.price}</strong>
            <strong>{SingleProduct.SingleProductprice}</strong>
          </p>
          <div>
            <h4 className="font-bold mt-3">Specification</h4>
            {SingleProduct.specification.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-justify mt-3">Product Description</h4>
            {SingleProduct.detail}
          </div>
          <button
            className="w-[90px] font-bold h-10 rounded-md mt-5 bg-[#f8c100] text-gray"
            onClick={addItemToBasket}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
