import mongoose, { connect } from 'mongoose';

export default () => {
  const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(
        'mongodb+srv://unidev-admin:7sGOJi4RKreGxfMh@cluster0.tmko3xy.mongodb.net/test'
      )
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
