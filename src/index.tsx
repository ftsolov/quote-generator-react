import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import { ReactComponent as Logo } from './media/logo_call-a-quote.svg'

ReactDOM.render(
  <React.StrictMode>
    <Logo className={"logo"}/>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
