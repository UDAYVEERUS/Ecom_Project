const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());
const mongo_url = 'mongodb+srv://uday:9670957901@cluster0.4j1e9wt.mongodb.net/te'

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', productRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
