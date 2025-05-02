const axios = require('axios');

const searchPart = async (mpn) => {
  const url = 'https://api.mouser.com/api/v1/search/partnumber';

  const payload = {
    SearchByPartRequest: {
      mouserPartNumber: mpn,
      partSearchOptions: 'Exact'
    }
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        apiKey: process.env.MOUSER_API_KEY
      }
    });

    if (!response.data || !response.data.SearchResults) {
      throw new Error('Empty response from Mouser');
    }

    return response.data;
  } catch (error) {
    console.error('Mouser API error:', error.response?.data || error.message);
    throw new Error('Mouser API failed');
  }
};

module.exports = { searchPart };
