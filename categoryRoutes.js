// const express = require("express");
// const router = express.Router();
// const Category = require("../models/Category");

// router.post("/", async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();

// // Sample route to get categories
// router.get("/", (req, res) => {
//   res.json(['Technology', 'Science', 'Arts']); // Example response
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Category = require('../models/Category'); // Ensure you have a Category model defined

// // POST route to create a new category
// router.post("/", async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category); // Return the created category
//   } catch (err) {
//     res.status(400).json({ error: err.message }); // Error handling
//   }
// });

// // GET route to fetch all categories (example response)
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find(); // Fetch categories from the database
//     res.json(categories); // Return the categories
//   } catch (err) {
//     res.status(500).json({ error: err.message }); // Error handling
//   }
// });

// module.exports = router;

// routes/categoryRoutes.js
// const express = require('express');
// const router = express.Router();
// const Category = require('../models/Category'); // Ensure this file exists

// // POST route to create a category

// router.post("/", async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // GET route to fetch all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find(); // Fetch from DB
//     res.json(categories);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// server/routes/categoryRoutes.js
// const express = require("express");
const express = require("express");  // Import express

const router = express.Router();
const Category = require("../models/Category");

// Route to fetch all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch categories from MongoDB
    res.status(200).json(categories); // Send categories as JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

module.exports = router;
