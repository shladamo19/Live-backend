// routes/energy.js
const express = require('express');
const router  = express.Router();

/**
 * GET /api/energy
 * Return the current energy dashboard data.
 * Replace the hard‑coded object with whatever logic
 * you eventually want (database, calculations, etc.).
 */
router.get('/', (req, res) => {
  res.json({
    level: 'High',
    mood: 'Optimistic',
    timestamp: Date.now()
  });
});

module.exports = router;
