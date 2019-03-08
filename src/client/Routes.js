import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
  {
    ...App,
    routes: [
      {
        ...UsersListPage,
        path: "/users",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins",
        exact: true
      },
      {
        path: "/",
        ...HomePage,
        exact: true
      },

      {
        ...NotFoundPage,
        exact: true
      }
    ]
  }
];
