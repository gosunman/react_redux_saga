import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
// import loggerMiddleWare from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import creasteSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const rootElement = document.getElementById("root");
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare));
const logger = createLogger();
const sagaMiddleware = creasteSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
