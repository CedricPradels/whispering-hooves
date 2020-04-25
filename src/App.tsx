import React from "react";
import "./components/_defaults/reset.css";
import "./components/_defaults/default.css";
import "./components/_defaults/variables.css";
import Header from "../src/components/Header";
import Intention from "../src/components/Intention";
import Collection from "../src/components/Collection";
import Press from "../src/components/Press";
import Footer from "../src/components/Footer";

//test

function App() {
  return (
    <>
      <Header />
      <Intention />
      <Collection />
      <Press />

      <Footer />
    </>
  );
}

export default App;
