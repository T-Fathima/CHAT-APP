import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.js';
import messageRoutes from './routes/message.js';
import connect from './db/connect.js';

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", auth);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`)
});