import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

 /* useEffect(()=>{
  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:5000/categories");
    setCategories(res.data);
  };
},[] );*/

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:5000/categories");
      setCategories(res.data);
    };

    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/products", {
        params: selectedCategory ? { category: selectedCategory } : {},
      });
      setProducts(res.data);
    };

    fetchCategories();
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Shopsy</h1>
      <div>
        <h2>Categories</h2>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Products</h2>
        <div>
          {products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category?.name || "N/A"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
