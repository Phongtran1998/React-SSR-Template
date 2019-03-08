import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../client/reducers";

export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });
  /* eslint-disable */
  if (global.window !== undefined) {
    global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
      global.window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  /* eslint-enable */

  const configuredStore = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  );

  return configuredStore;
};
