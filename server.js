const express = require('express');

const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.set("view engine", 'ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
// Middleware
app.use(express.json());

app.use('/',router);

// Database connection
mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://moussoubillel:followthewind00@sawanus.xw7ivfh.mongodb.net/Sawanus?retryWrites=true&w=majority&appName=Sawanus')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once the database connection is established
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });





