const mongoose = require('mongoose');

const bookingDetailsSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [3, 'Full name must be at least 3 characters long'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [10, 'Age must be at least 10'],
    max: [100, 'Age cannot exceed 100'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: {
      values: ['Male', 'Female', 'Other' , 'male' , 'female' , 'others'],
      message: 'Invalid Gender',
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  bookingdate: {
    type: Date,
    required: [true, 'Booking date is required'],
    validate: {
      validator: (value) => value >= new Date(),
      message: 'Booking date cannot be in the past',
    },
  },
  phoneno: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  hometown: {
    type: String,
    required: [true, 'Hometown is required'],
    trim: true,
    minlength: [3, 'Hometown must be at least 3 characters long'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);
module.exports = BookingDetails;
