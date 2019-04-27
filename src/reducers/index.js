import {
  combineReducers
} from "redux";
import products from "./productReducer";

const rootResucer = combineReducers({
  products
});

export default rootResucer;