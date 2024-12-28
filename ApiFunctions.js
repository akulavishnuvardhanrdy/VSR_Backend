const Users = require('./Models/Users');
const BookingDetails = require('./Models/BookingDetails');

const bcrypt = require('bcrypt');

const AddUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new Users({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Registered Successfully', data: savedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', data: user });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred during login' });
  }
};


const Booking = async (req, res) => {
  try {
    const newBooking = new BookingDetails(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booked Successfully', data: savedBooking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { AddUser, Booking , UserLogin};
