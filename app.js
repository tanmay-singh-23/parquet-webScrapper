const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB connection settings
const mongoUri = "mongodb://localhost:27017/parquetDB";

// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema and model for the data
const dataSchema = new mongoose.Schema({
    hvfhs_license_num: String,
    dispatching_base_num: String,
    originating_base_num: String,
    request_datetime: Date,
    on_scene_datetime: Date,
    pickup_datetime: Date,
    dropoff_datetime: Date,
    PULocationID: Number,
    DOLocationID: Number,
    trip_miles: Number,
    trip_time: Number,
    base_passenger_fare: Number,
    tolls: Number,
    bcf: Number,
    sales_tax: Number,
    congestion_surcharge: Number,
    airport_fee: Number,
    tips: Number,
    driver_pay: Number,
    shared_request_flag: String,
    shared_match_flag: String,
    access_a_ride_flag: String,
    wav_request_flag: String,
    wav_match_flag: Number
}, { collection: 'parquetCollection' });

const DataModel = mongoose.model('Data', dataSchema);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch and return data as JSON for '/data' endpoint
app.get('/data', async (req, res) => {
    try {
        const data = await DataModel.find({}).limit(100);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint examples based on different criteria

// 1. Endpoint to fetch all data
app.get('/data/all', async (req, res) => {
    try {
        const data = await DataModel.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 2. Endpoint to fetch data by PULocationID
app.get('/data/pickup/:PULocationID', async (req, res) => {
    try {
        const data = await DataModel.find({ PULocationID: req.params.PULocationID }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 3. Endpoint to fetch data by DOLocationID
app.get('/data/dropoff/:DOLocationID', async (req, res) => {
    try {
        const data = await DataModel.find({ DOLocationID: req.params.DOLocationID }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 4. Endpoint to fetch data by pickup_datetime
app.get('/data/date/:pickup_datetime', async (req, res) => {
    try {
        const data = await DataModel.find({ pickup_datetime: { $gte: new Date(req.params.pickup_datetime) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 5. Endpoint to fetch data by driver_pay
app.get('/data/driver/:driver_pay', async (req, res) => {
    try {
        const data = await DataModel.find({ driver_pay: { $gte: parseFloat(req.params.driver_pay) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 6. Endpoint to fetch data by tips
app.get('/data/tips/:tips', async (req, res) => {
    try {
        const data = await DataModel.find({ tips: { $gte: parseFloat(req.params.tips) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 7. Endpoint to fetch data by trip_miles
app.get('/data/miles/:trip_miles', async (req, res) => {
    try {
        const data = await DataModel.find({ trip_miles: { $gte: parseFloat(req.params.trip_miles) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 8. Endpoint to fetch data by trip_time
app.get('/data/time/:trip_time', async (req, res) => {
    try {
        const data = await DataModel.find({ trip_time: { $gte: parseFloat(req.params.trip_time) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 9. Endpoint to fetch data by base_passenger_fare
app.get('/data/fare/:base_passenger_fare', async (req, res) => {
    try {
        const data = await DataModel.find({ base_passenger_fare: { $gte: parseFloat(req.params.base_passenger_fare) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 10. Endpoint to fetch data by tolls
app.get('/data/tolls/:tolls', async (req, res) => {
    try {
        const data = await DataModel.find({ tolls: { $gte: parseFloat(req.params.tolls) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 11. Endpoint to fetch data by sales_tax
app.get('/data/sales_tax/:sales_tax', async (req, res) => {
    try {
        const data = await DataModel.find({ sales_tax: { $gte: parseFloat(req.params.sales_tax) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



// 13. Endpoint to fetch data by airport_fee
app.get('/data/airport/:airport_fee', async (req, res) => {
    try {
        const data = await DataModel.find({ airport_fee: { $gte: parseFloat(req.params.airport_fee) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 14. Endpoint to fetch data by bcf
app.get('/data/bcf/:bcf', async (req, res) => {
    try {
        const data = await DataModel.find({ bcf: { $gte: parseFloat(req.params.bcf) } }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// 15. Endpoint to fetch data by shared_match_flag
app.get('/data/shared/:shared_match_flag', async (req, res) => {
    try {
        const data = await DataModel.find({ shared_match_flag: req.params.shared_match_flag }).limit(10);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
