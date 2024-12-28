
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./dbConn'); // Import DB connection
const { AddUser, Booking } = require('./ApiFunctions'); // Import route handlers

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.post('/addUser', AddUser);
app.post('/booking', Booking);

app.listen(port, () => console.log(`Server running on port ${port}`));
