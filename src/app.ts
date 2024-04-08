import express from 'express';
import itemRoutes from './routes/itemRoutes';

const app = express();
app.use(express.json());

app.use('/items', itemRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
