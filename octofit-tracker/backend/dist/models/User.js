import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'athlete' },
}, { timestamps: true });
export const User = model('User', userSchema);
