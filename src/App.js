import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ScrollToTop from './components/ScroolToTop';
import React from "react";

function App() {

  return (
    <div className="App">
   
      <ScrollToTop />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

  </div>
  );
}

export default App;
