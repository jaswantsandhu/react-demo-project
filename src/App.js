import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from "./components/content"

function App() {

  return (
    <main>
      <Header></Header>
      <Content></Content>
    </main>
  );
}

export default App;
