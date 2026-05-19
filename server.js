const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// JPRO CRM map at /
app.use(express.static(path.join(__dirname, 'public')));

// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), leads: 1312 });
});

app.listen(PORT, () => {
  console.log(`Mustfind + JPRO CRM running on port ${PORT}`);
});
