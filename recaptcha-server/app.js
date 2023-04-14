const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/verify', async (req, res) => {
  console.log('>>> app.post verify')
  const response = req.body.response;
  try {
    const result = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response,
      },
    });

    if (result.data.success) {
      res.json({ success: true });
    } else {
      res.json({ success: false, errors: result.data['error-codes'] });
    }
  } catch (error) {
    res.status(500).json({ success: false, errors: ['server_error'] });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});