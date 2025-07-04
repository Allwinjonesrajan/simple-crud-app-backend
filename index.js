const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const ProductRoute = require('./routes/product.route.js');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://sports-ecommerce-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', ProductRoute);

// MongoDB Connection
mongoose.connect("mongodb+srv://allwinjones3327:J1s3710@cluster0.w4hyibk.mongodb.net/")
  .then(() => {
    console.log("✅ Connected to MongoDB!");
    app.listen(5000, () => {
      console.log("🚀 Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
  });