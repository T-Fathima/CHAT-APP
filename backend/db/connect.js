import mongoose from 'mongoose';
import 'dotenv/config';


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {    
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

export default connect;
