const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const ProductRoute = require('./routes/product.route.js');
const app = express()


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
app.use('/api/products', ProductRoute);



mongoose.connect("mongodb+srv://allwinjones3327:J1s3710@cluster0.w4hyibk.mongodb.net/")
    .then(() => {
        console.log("Connected to database!")
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch(() => {
        console.log("Connection failed!")
    });
