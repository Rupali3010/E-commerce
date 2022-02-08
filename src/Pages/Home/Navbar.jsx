import React from "react";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import basketReducer from "./../../redux/Reducer/CartReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  let cartData = useSelector(state => state.basketReducer.basket);
  return (
    <>
      <section className="bg-zinc-800 h-10 border-b-1 border-white-100 w-full flex  ">
        <article className="w-4/5 mx-auto h-10 flex justify-between items-center">
          <div className="text-slate-300 text-xs">
            <p>Free shipping on domestic orders over $150</p>
          </div>
          <div className="text-slate-300">
            <ul className="flex p-2">
              <li className="mx-4 text-xs">language</li>
              <li className="mx-4 text-xs">$Currency</li>
              <li className="mx-4 text-xs">Customer Service: 777-900-4000</li>
            </ul>
          </div>
        </article>
      </section>
      {/* main nav bar starts here */}
      <section id="navbarBlock" className="bg-black h-16 -mt-2">
        <article className="w-4/5 m-auto h-16 flex justify-between items-center">
          <div className="w-1/4">
            <div className="logo text-white text-xl font-bold hover:text-gray-300">
              <img
                src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/catalog/logo.jpg"
                alt="logo"
              />
            </div>
          </div>
          ``
          <div className="w-4/5 flex justify-center">
            <form className="w-4/5 flex justify-center position:relative">
              <input
                type="search"
                placeholder="Search Products"
                className="w-full h-10 rounded-md p-4"
              />
              <BiSearch className="position:absolute  mt-2 -ml-8 w-6 h-6" />
            </form>
          </div>
          <div className="w-1/4 flex justify-end ml-12">
            <div className="menu">
              <nav>
                <ul className="flex items-center list-none text-white ">
                  <li>
                    <Link
                      to="/login"
                      className="no-underline text-white px-4 flex items-center"
                    >
                      <span className="w-14 h-14 mt-6 mr-1">
                        <BiUser className="w-12 h-7 fill-yellow-600" />
                      </span>
                      <p className="text-sm flex">Sign In </p>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="no-underline text-white px-5  flex items-center text-lg"
                    >
                      <span className="w-14 h-14 mt-6 mr-1 ">
                        <BiShoppingBag className="w-10 h-6 fill-yellow-600" />
                      </span>

                      <p className="text-sm">Return & Orders </p>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/checkout"
                      className="no-underline text-white px-4 captalize flex items-center"
                    >
                      <div className="w-0.5 h-14  mr-2   ">
                        <sup className="mx-7 bg-yellow-500 rounded-full text-white text-bold px-1 py-0">
                          {cartData && cartData.length}{" "}
                        </sup>
                        <BiCart className="w-8 h-6 fill-yellow-600" />
                      </div>
                      <p></p>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </article>
      </section>
      <section className="bg-zinc-800 h-10 -mt-0  w-full flex my-2 shadow-md">
        <article className="w-4/5 mx-auto h-10 flex  justify-between items-center">
          <div className="text-white w-3/  h-10">
            <ul className="flex p-2">
              <li className="mx-6">Home</li>
              <li className="mx-6">Electronics</li>
              <li className="mx-6">Home Sensor</li>
              <li className="mx-6">Laptop</li>
              <li className="mx-6">Speakers</li>
              <li className="mx-6">Drones</li>
              <li className="mx-6">HeadPhones</li>
              <li className="mx-6">More</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;
