import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header";
import Home from "./pages/OnePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Home />
      {/*<section id="accueil"> </section>
      <section id="a-propos"> </section>
      <section id="competences"> </section>
      <section id="realisations"> </section>
      <section id="parcours"> </section>
      <section id="contact"> </section>*/}
    </div>
  </React.StrictMode>
);
