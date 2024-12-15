import express from "express";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 8000;
import cardRoute from './routes/cardRoute.js';

app.use(express.json());

// Apply task routes
app.use('/card', cardRoute);

app.get('/', (req, res) => {
  return res.json({ message: "hello" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
