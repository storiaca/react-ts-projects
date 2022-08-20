import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from "./features/games/GamesPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
