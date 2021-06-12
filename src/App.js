import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from "./components/content"

import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <main>
        <Header></Header>
        <Content></Content>
      </main>
    </Router>
  );
}

export default App;
