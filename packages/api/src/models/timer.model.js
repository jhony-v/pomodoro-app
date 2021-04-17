import mongoose, { model, Schema } from 'mongoose';
import { UserModel } from './user.model';

export const TimerSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  description: String,
  durations: {
    normal: Number,
    short: Number,
    long: Number,
  },
  color: String,
});

TimerSchema.statics.createNewTimerNote = async function ({
  title,
  description,
  durations,
  color,
  userId,
}) {
  const searchUser = await UserModel.findOne({
    _id: userId,
  });
  if (searchUser) {
    return this.create({
      title,
      description,
      color,
      durations,
      user: searchUser,
    });
  }
  throw new Error('User id not found');
};

export const TimerModel = model('Timer', TimerSchema);
