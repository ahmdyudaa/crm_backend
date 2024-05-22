const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const supplierRoutes = require('./routes/supplierRoutes');
// const resellerRoutes = require('./routes/resellerRoutes');
const customerRoutes = require('./routes/customer_route');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// app.use('/suppliers', supplierRoutes);
// app.use('/resellers', resellerRoutes);
app.use('/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Company API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
