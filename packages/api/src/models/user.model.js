import { model, Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: String,
  fullName: String,
});

export const UserModel = model('User', UserSchema);
