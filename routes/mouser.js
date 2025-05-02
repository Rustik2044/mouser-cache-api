const express = require('express');
const router = express.Router();
const { searchPart } = require('../services/mouserApi');
const { normalizePartNumber, isValidResponse } = require('../utils/helpers');
const { getFromCache, saveToCache } = require('../cache');

// GET /mouser/search?part=CL05A475KP5NRNC
router.get('/search', async (req, res) => {
  const mpnRaw = req.query.part;
  if (!mpnRaw) {
    return res.status(400).json({ error: 'Missing part number in query' });
  }

  const mpn = normalizePartNumber(mpnRaw);

  // Check cache first
  const cached = getFromCache(mpn);
  if (cached) {
    return res.json({ source: 'cache', ...cached });
  }

  try {
    const data = await searchPart(mpn);
    if (!isValidResponse(data)) {
      return res.status(404).json({ error: 'No results from Mouser' });
    }

    const partData = data.SearchResults.Parts[0]; // берём первый результат
    saveToCache(mpn, { partData });
    res.json({ source: 'mouser', partData });
  } catch (error) {
    console.error('Mouser API error:', error.message);
    res.status(500).json({ error: 'Mouser API failed' });
  }
});

module.exports = router;
