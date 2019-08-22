import { configureStore, combineReducers } from "redux-starter-kit";
import { authReducer } from "./features/authFeature";

const reducer = combineReducers([authReducer]);

export const store = configureStore({ reducer });
