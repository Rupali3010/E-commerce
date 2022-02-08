import { combineReducers } from "redux";

import basketReducer from "./CartReducer";
let reducer = combineReducers({ basketReducer });

export default reducer;
