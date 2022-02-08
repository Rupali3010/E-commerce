import * as types from "../Action/actionType";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

export let Createuser = (email, password) => {
  return async dispatch => {
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch({
        type: "CREATE_USER",
        // payload: userData,
      });
      sendEmailVerification(user);
    });
  };
};

export let Loginuser = (email, password) => {
  return async dispatch => {
    let loginData = await signInWithEmailAndPassword(auth, email, password);
    if (loginData.user.emailVerified === true) {
      toast.success("successfully logged in");
      dispatch({
        type: "LOGIN_USER",
        // payload: loginData,
      });
    }
  };
};

export const add_to_basket = items => ({
  type: types.ADD_TO_BASKET,
  payload: items,
});

export let removeBasket = id => ({
  type: types.remove_from_cart,
  payload: id,
});
