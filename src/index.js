import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";

const nav = {
  main: "/index",
  about: "/about",
  price: "/buy/price",
  contact: "/contact"
};

const title = "My website";
const greeting = "Hello! ";

ReactDOM.render(
  <App title={title} greeting={greeting} nav={nav} />,
  document.getElementById("root")
);
