import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
// import { Server } from 'socket.io';
import dotenv from 'dotenv';

// import userRoutes from './routes/userRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import { socketHandler } from './sockets/socket.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// // API Routes
// app.use('/api/user', userRoutes);
// app.use('/api/admin', adminRoutes);

// Socket Handler
// socketHandler(io);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
