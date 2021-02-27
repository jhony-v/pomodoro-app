import mongoose, { model, Schema } from 'mongoose';

export const TimerSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: String,
  timers: [],
});

export const TimerModel = model('Timer', TimerSchema);
