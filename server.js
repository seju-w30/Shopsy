// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose
//   .connect("mongodb://localhost:27017/shopsy")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// app.use("/categories", require("./routes/categoryRoutes"));
// app.use("/products", require("./routes/productRoutes"));

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// // Middleware setup
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/shopsy", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.use("/categories", require("./routes/categoryRoutes"));
// app.use("/products", require("./routes/productRoutes"));

// // Example route to fetch categories (if you want a default response for '/api/categories')
// app.get('/api/categories', (req, res) => {
//   res.json(['Technology', 'Science', 'Arts']); // Example response
// });

// // Server setup
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/shopsy", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));
//   //app.use("/categories", /*require("./routes/categoryRoutes")*/()=>{console.log("Working")});
//   app.get("/categories",(req,res)=>{console.log("working")});
// app.use("/categories", require("./routes/categoryRoutes")); // Define the route for categories

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/shopsy", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error(err));

// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to Shopsy!");
// });

// // Categories route
// app.use("/categories", require("./routes/categoryRoutes"));

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express"); // Import express
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();  // Initialize the express app

app.use(bodyParser.json()); // Use bodyParser to parse incoming JSON data
app.use(cors());  // Enable CORS for all routes

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/shopsy", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Shopsy!");
});

// Categories route
app.use("/categories", require("./routes/categoryRoutes")); // Import the category routes



// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
