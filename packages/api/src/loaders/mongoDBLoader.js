import mongoose from 'mongoose';

export default async function mongoDBLoader() {
  mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}
