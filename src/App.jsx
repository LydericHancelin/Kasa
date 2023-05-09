import * as React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="location/:id" element={<Location />} />
          <Route path="apropos" element={<APropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}
