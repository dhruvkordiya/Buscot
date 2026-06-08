const express = require('express');
const router = express.Router();

// Get orders (placeholder)
router.get('/', (req, res) => {
  res.json({ orders: [] });
});

// Create order (placeholder)
router.post('/', (req, res) => {
  res.json({ message: 'Order created successfully' });
});

module.exports = router;
