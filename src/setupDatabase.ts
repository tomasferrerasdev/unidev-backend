import mongoose, { connect } from 'mongoose';
import { config } from './config';

export default () => {
  const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.log(`successfully connected to database.`);
      })
      .catch((error) => {
        console.log(`error connecting to database.`, error);
        return process.exit(1);
      });
  };
  connect();
};

mongoose.connection.on('disconnected', connect);
