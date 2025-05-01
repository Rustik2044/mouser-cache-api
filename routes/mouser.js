const express = require('express');
const router = express.Router();
const { searchPart } = require('../services/mouserApi');

router.get('/:mpn', async (req, res) => {
  try {
    const data = await searchPart(req.params.mpn);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Mouser API failed' });
  }
});

module.exports = router;
