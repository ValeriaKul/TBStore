import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReduser } from "./reduser/categoriesReduser";
import { productsReducer } from "./reduser/productsReduser";
import thunk from "redux-thunk";
import { basketReducer } from "./reduser/basketReduser";

const rootReduser = combineReducers({
  categories: categoriesReduser,
  products: productsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
