import { createStore,compose, applyMiddleware } from "redux";
import { appReducer } from "../reducers/combined-reducers";
import initialState from "./initial-state";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, initialState,   composeEnhancers(applyMiddleware(thunk)));
