import React from "react";
import Navbar from "./component/Navbar";
import Pays from "./component/pays";
import Footer from "./component/Footer";
import "./App.css"; // <-- import CSS local pour App

export default function App() {
  return (
    <>
      <Navbar />
      <Pays />
      <Footer />
    </>
  );
}
