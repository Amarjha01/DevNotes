// mongo.js
// MongoDB connection utility using Mongoose
import mongoose from 'mongoose';
const uri = process.env.MONGO_URI;
let isConnected = false;

export async function connect() {
  if (!isConnected) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to MongoDB with Mongoose');
  }
  return mongoose.connection; 
}
