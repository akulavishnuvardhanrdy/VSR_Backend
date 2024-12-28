const Users = require('./Models/Users');
const BookingDetails = require('./Models/BookingDetails');

const AddUser = async (req, res) => {
  try {
    const newUser = new Users(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Registered Successfully', data: savedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
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

module.exports = { AddUser, Booking };
