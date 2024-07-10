import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <section id="accueil"> </section>
      <section id="a-propos"> </section>
    </div>
  </React.StrictMode>
);
