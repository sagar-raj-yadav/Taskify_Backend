import express from "express";
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 8000;
import cardRoute from './routes/cardRoute.js';
import taskRoute from './routes/taskRoute.js';
import memberRoute from './routes/memberRoute.js';
import commentRoute from './routes/commentRoute.js';

app.use(express.json());

// All  routes
app.use('/card', cardRoute);
app.use('/task',taskRoute);
app.use('/member',memberRoute);
app.use('/comment',commentRoute);


app.get('/', (req, res) => {
  return res.json({ message: "hello" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
