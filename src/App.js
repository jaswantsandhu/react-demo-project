import { useState, useEffect } from "react";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Store from "./store";
import Header from "./components/header";
import Content from "./components/content";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  

  return (
    <ReduxProvider store={Store}>
      <Router>
        <main>
          <Header></Header>
          <Content></Content>
        </main>
      </Router>
    </ReduxProvider>
  );
}

export default App;
