import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

// Проверяем, не была ли модель уже определена
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;