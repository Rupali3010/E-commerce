import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Createuser } from "../../redux/Action/Action";

const Register = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [state, setstate] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

  let { name, email, password } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(Createuser(email, password));
      toast.success("successfully signed up");
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="register bg-[#efefef] h-[200vh] flex flex-col items-center">
      <Link to="/">
        <img
          src="LogoShop.png"
          alt="logo"
          className="login-logo mt-3 mb-5 object-contain w-[150px] mr-auto ml-auto "
        />
      </Link>
      <div className="register-container bg-white w-[385px] h-[390px] flex flex-col rounded-md border-2 border-solid border-gray-600 p-5">
        <h1 className="font-semibold mb-5 text-3xl">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <h5 className="text-sm mb-1">Name</h5>
          <input
            type="name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
            className="h-10 mb-1 bg-white w-[98%] border-2"
          />
          <h5 className="text-sm mb-1">E-mail</h5>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={handleChange}
            className="h-10 mb-1 bg-white w-[98%] border-2"
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
            className="h-10 mb-1 bg-white w-[98%] border-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="continue bg-black rounded-sm w-[100%] h-9 border-2 border-solid mt-2 text-white border-b-2 border-b-solid border-b-gray-600 cursor-pointer"
          >
            Continue
          </button>
          <div className="detail flex mt-4 border-t-2 border-t-solid border-t-gray-400">
            <p className="mt-2 text-sm">Already have an account ?</p>
            <Link to="/login" className="signIn-link ml-1 text-sm no-underline">
              <p className="mt-2 text-sm">Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
