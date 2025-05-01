function normalizePartNumber(partNumber) {
  return partNumber.trim().toUpperCase();
}

function isValidResponse(data) {
  return data && data.SearchResults && data.SearchResults.Parts && data.SearchResults.Parts.length > 0;
}

module.exports = { normalizePartNumber, isValidResponse };
