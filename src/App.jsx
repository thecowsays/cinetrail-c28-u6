import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import ThemeContextProvider from "./contexts/ThemeContext";

import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      {/* surrounds Header and Footer so they will also have access */}
      <ThemeContextProvider>
        <Header />

        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/movieDetails/:movieId"} element={<MovieDetails />} />
          {/* <Route path={"/"} element={<Homepage />} /> */}
          {/* <Route path={"/"} element={<Homepage />} /> */}
          {/* <Route path={"/"} element={<Homepage />} /> */}
          <Route path={"*"} element={<Homepage />} />
        </Routes>

        <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
