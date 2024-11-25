import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/add-category">Add Category</Link>
    <Link to="/add-product">Add Product</Link>
  </nav>
);

export default Navbar;
