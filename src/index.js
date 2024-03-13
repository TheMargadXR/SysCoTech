import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Download from "./Routes/Download";
import Blog from "./Routes/Blog";
import Registration from "./Routes/Registeration";
import Shop from "./Routes/Shop";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
