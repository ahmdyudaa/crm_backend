const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./routes/customer_route');
const prospekRoutes = require('./routes/prospek_route');
const agenRoutes = require('./routes/agen_route');
const akunRoutes = require('./routes/akun_route');
const produkRoutes = require('./routes/produk_route');
const penjualanRoutes = require('./routes/penjualan_route');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/customer', customerRoutes);
app.use('/prospek', prospekRoutes);
app.use('/agen', agenRoutes);
app.use('/akun', akunRoutes);
app.use('/produk', produkRoutes);
app.use('/penjualan', penjualanRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Company API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});