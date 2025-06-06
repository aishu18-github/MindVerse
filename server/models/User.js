const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['student', 'educator'], default: 'student' },
  bio: String,
  interests: [String],
  profilePicture: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
