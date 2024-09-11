import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route index element={<Home/>}/>

  </Route>)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
