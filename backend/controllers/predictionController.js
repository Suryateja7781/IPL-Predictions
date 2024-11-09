const axios = require('axios');

exports.getPrediction = async (req, res) => {
  try {
    const inputData = req.body;  // Data received from frontend
    const response = await axios.post(`${process.env.PYTHON_API_URL}/predict`, inputData);
    const prediction = response.data.prediction;
    res.json({ prediction });
  } catch (error) {
    console.error("Error in prediction:", error);
    res.status(500).json({ error: 'Error making prediction' });
  }
};
