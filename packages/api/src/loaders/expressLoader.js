import cors from 'cors';
import express from 'express';
import mongoDBLoader from './mongoDBLoader';
import routes from '../api/routes';

const PORT = 7000;

export default function expressLoader() {
  mongoDBLoader();

  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/api', routes);
  app.listen(PORT || process.env.PORT);
}
