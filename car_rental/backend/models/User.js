

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Remove username if not needed
  // username: { type: String, unique: true, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
