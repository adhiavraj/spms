const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/option-chain-indices', async (req, res) => {
  try {
    const response = await axios.get('https://www.nseindia.com/api/option-chain-indices', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Authorization': 'use_your_own_api_from_rapidapi(ref)',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Option Chain data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});