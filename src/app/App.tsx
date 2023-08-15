import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageContainer } from "../components/PageContainer/PageContainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <PageContainer>
          <Header />
          <Router />
        </PageContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
