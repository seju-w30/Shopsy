import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; // Import the Navbar component
import AddCategory from "./components/AddCategory"; // Import the AddCategory component
import AddProduct from "./components/AddProduct"; // Import the AddProduct component
import HomePage from "./components/HomePage"; // Import the HomePage component

function App() {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
