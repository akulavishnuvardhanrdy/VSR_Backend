const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./dbConn'); 
const { AddUser, Booking, UserLogin } = require('./ApiFunctions');
const authenticateToken = require('./Middlewares');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Configure CORS to allow only the specified origin
const allowedOrigins = [
  'https://vsr-booking.onrender.com',
  'http://localhost:5173', // Add your new origin here
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

connectDB();

app.post('/addUser', AddUser);
app.post('/booking', authenticateToken, Booking);
app.post('/login', UserLogin);

app.listen(port, () => console.log(`Server running on port ${port}`));
