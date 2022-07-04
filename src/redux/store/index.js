import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const reducer = combineReducers({});
const store = configureStore({
  reducer,
  middleware,
});
sagaMiddleware.run(RootSaga);
export default store;
