import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux/reducers";

import { READ_AUTH } from "./redux/actions/types";
import jwtDecode from "jwt-decode";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

if (sessionStorage.getItem("auth")) {
  try {
    const token = JSON.parse(sessionStorage.getItem("auth"));
    const { userId } = jwtDecode(token);
    store.dispatch({
      type: READ_AUTH,
      payload: { token, userId }
    });
  } catch (err) {
    sessionStorage.setItem("auth", null);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
