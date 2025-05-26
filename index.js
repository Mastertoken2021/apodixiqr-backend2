const express = require('express');
const fetchReceipt = require('./api/fetch-receipt');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/fetch-receipt', fetchReceipt);

app.get('/', (req, res) => {
  res.send('🧾 ApodixiQR Backend is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
