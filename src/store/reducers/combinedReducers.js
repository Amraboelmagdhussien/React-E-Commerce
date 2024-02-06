import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import AddToFav from "./favorutieReducer";
import AddToCartReducer from "./AddToCartReducer";

export default combineReducers({
  loader: loaderReducer,
  favourite: AddToFav,
  cart: AddToCartReducer,
});
