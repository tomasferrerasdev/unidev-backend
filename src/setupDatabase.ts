import Logger from 'bunyan';
import mongoose, { connect } from 'mongoose';
import { config } from './config';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('successfully connected to database.');
      })
      .catch((error) => {
        log.error('error connecting to database.', error);
        return process.exit(1);
      });
  };
  connect();
};

mongoose.connection.on('disconnected', connect);
