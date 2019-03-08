import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import * as actions from "./actions";
const App = ({ route }) => {
  return (
    <div className="ui container">
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(actions.fetchCurrentUser())
};
