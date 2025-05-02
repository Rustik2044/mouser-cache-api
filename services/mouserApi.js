const axios = require('axios');

const searchPart = async (mpn) => {
  const response = await axios.post('https://api.mouser.com/api/v1/search/partnumber', {
    SearchByPartRequest: {
      mouserPartNumber: mpn,
      partSearchOptions: 'Exact',
    },
    apiKey: process.env.MOUSER_API_KEY,  // API-ключ ВНУТРИ тела запроса
  }, {
    headers: { 'Content-Type': 'application/json' }
  });

  return response.data;
};

module.exports = { searchPart };
