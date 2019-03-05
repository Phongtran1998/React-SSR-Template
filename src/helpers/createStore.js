import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export const configure = () => {
  const composeArguments = applyMiddleware(thunk);
  /* eslint-disable */
  if (global.window !== undefined) {
    global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
      global.window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  /* eslint-enable */

  const composedEnhancer = compose(...composeArguments);

  const configuredStore = createStore(reducers, {}, composedEnhancer);

  return configuredStore;
};
