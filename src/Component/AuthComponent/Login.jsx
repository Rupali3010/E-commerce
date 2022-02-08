import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loginuser } from "../../redux/Action/Action";

const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setstate] = useState({
    email: "",
    password: "",
  });

  let { email, password } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(Loginuser(email, password));
      toast.success("successfully logged in");
      navigate("/");
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login bg-[#efefef] h-[100vh] flex flex-col items-center">
      <Link to="/">
        <img
          src="LogoShop.png"
          alt="logo"
          className="login-logo mt-3 mb-5 object-contain w-[150px] mr-auto ml-auto "
        />
      </Link>
      <div
        className="login-container w-[385px] h-fit flex flex-col rounded-md bg-white
      border-2 border-solid border-gray-400 p-5"
      >
        <h1 className="font-semibold mb-5 text-3xl">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <h5 className="text-sm mb-1">E-mail</h5>
          <input
            type="text"
            value={email}
            placeholder="Enter Email Address"
            name="email"
            onChange={handleChange}
            className="h-10 mb-2 bg-white w-[98%] border-2"
          />
          <h5 className="text-sm mb-1">Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="h-10 mb-2 bg-white w-[98%] border-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black rounded-sm w-[100%] h-9 border-2 border-solid mt-2 text-white border-[#a88734 #9c7e31 #846a29] cursor-pointer"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-xs">
          By continuing, you agree to eShopper's conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p className="mt-2 text-gray-600">New to eShopper ?</p>
      <Link to="/register">
        <button className="rounded-sm w-[390px] h-[35px] border-2 border-solid mt-2 border-gray-600 text-xs cursor-pointer bg-black text-white">
          Crate Your eShopper Account
        </button>
      </Link>
    </div>
  );
};

export default Login;
