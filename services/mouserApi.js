const axios = require('axios');

const searchPart = async (mpn) => {
  try {
    const response = await axios.post(
      'https://api.mouser.com/api/v1/search/partnumber',
      {
        SearchByPartRequest: {
          mouserPartNumber: mpn,
          partSearchOptions: 'Exact',
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        params: {
          apiKey: process.env.MOUSER_API_KEY,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error('Failed Mouser API call:', err.response?.data || err.message);
    throw err;
  }
};

module.exports = { searchPart };
