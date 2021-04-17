import { model, Schema } from 'mongoose';
import { v4 } from 'uuid';

export const UserSchema = new Schema({
  username: String,
  fromDevice: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
    validate: {
      validator: (e) => {
        return ['dark', 'light'].includes(e);
      },
    },
  },
});
UserSchema.statics.createNewAnonymousUser = function ({ fromDevice, theme }) {
  return this.create({
    username: v4(),
    fromDevice,
    theme,
  });
};

export const UserModel = model('User', UserSchema);
