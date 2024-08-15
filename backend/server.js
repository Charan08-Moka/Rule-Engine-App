/* const express = require('express');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/rules');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/rules', ruleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */

/* const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the rules routes with /api prefix
app.use('/api/rules', require('./routes/rules'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.use('/api/rules', require('./routes/rules'));  */

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');



// Connect to MongoDB
connectDB();


// Middleware to parse JSON
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Adjust if needed
  })); 

// Use the rules routes with /api prefix 
app.use('/api/rules', require('./routes/rules')); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

