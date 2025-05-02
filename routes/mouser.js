const express = require('express');
const router = express.Router();
const { searchPart } = require('../services/mouserApi');

// Вариант 1: ?part=...
router.get('/search', async (req, res) => {
  const mpn = req.query.part;
  if (!mpn) return res.status(400).json({ error: 'Missing part parameter' });

  try {
    const data = await searchPart(mpn);
    res.json(data);
  } catch (error) {
    console.error('Mouser search failed:', error.message);
    res.status(500).json({ error: 'Mouser API failed' });
  }
});

// Вариант 2: /mouser/:mpn
router.get('/:mpn', async (req, res) => {
  const mpn = req.params.mpn;

  try {
    const data = await searchPart(mpn);
    res.json(data);
  } catch (error) {
    console.error('Mouser direct search failed:', error.message);
    res.status(500).json({ error: 'Mouser API failed' });
  }
});

module.exports = router;
