const cache = new Map();

function getFromCache(key) {
  return cache.get(key);
}

function saveToCache(key, value) {
  cache.set(key, value);
}

module.exports = { getFromCache, saveToCache };
