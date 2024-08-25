const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const signupRoutes = require('./routes/signupRouters');
const signup=require('./models/signup')

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api', signupRoutes);


app.listen(8000, () => {
  console.log('Server started on http://localhost:8000');
});
