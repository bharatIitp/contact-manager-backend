import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware (JSON)
app.use(express.json());

//Routes
app.use('/api/contacts', contactRoutes);

//Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server only after DB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });
