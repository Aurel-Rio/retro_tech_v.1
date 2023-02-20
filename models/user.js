const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^\S+@\S+\.\S+$/.test(value);
      },
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;