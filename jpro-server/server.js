const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', leads: 1312 });
});

app.listen(PORT, () => {
  console.log(`JPRO CRM running on port ${PORT}`);
});
