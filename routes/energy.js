const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.json({              // Replace with real logic later
    level: 'High',
    mood:  'Optimistic',
    ts:    Date.now()
  });
});

module.exports = router;
