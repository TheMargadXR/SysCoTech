import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Download from './pages/Download';
import Blog from './pages/Blog';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/blog",
    element: <Blog />
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
