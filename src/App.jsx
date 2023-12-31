import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/movieDetails"} element={<MovieDetails />} />
        {/* <Route path={"/"} element={<Homepage />} /> */}
        {/* <Route path={"/"} element={<Homepage />} /> */}
        {/* <Route path={"/"} element={<Homepage />} /> */}
        <Route path={"*"} element={<Homepage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
