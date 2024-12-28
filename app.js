
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./dbConn'); 
const { AddUser, Booking ,UserLogin } = require('./ApiFunctions');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.post('/addUser', AddUser);
app.post('/booking', Booking);
app.post('/login',UserLogin);

app.listen(port, () => console.log(`Server running on port ${port}`));
