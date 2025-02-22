const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.router');
const cors = require('cors');
// ✅ Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Optional for form data
app.use(cors());
// Test Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// ✅ Use AI Routes
app.use("/ai", aiRoutes);

module.exports = app;
