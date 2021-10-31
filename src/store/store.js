import { createStore } from "redux";

import FavReducer from "./Reducer";

const Devtool = window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION();

const Store = createStore(FavReducer,Devtool);

export default Store;