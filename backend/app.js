require('dotenv').config();
const express = require('express');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/predict', predictionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
