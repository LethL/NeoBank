import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
