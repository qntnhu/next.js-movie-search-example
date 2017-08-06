const es6Promise = require('es6-promise'); // eslint-disable-line import/newline-after-import
es6Promise.polyfill();
require('isomorphic-fetch'); // eslint-disable-line import/first
const cache = require('./cache');

function getIMDbApi(key) {
  const firstCharacter = key[0];

  return `http://sg.media-imdb.com/suggests/${firstCharacter}/${key}.json`; // JSONP api (not official)
}

module.exports = async function(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const searchRes = await fetch(getIMDbApi(key), {
    credentials: 'omit' // default option is 'omit'
  });
  const resText = await searchRes.text();
  const reg = new RegExp(`imdb\\$${key}\\((.*)\\)`);
  const resTextStripJsonp = resText.replace(reg, '$1');

  cache.set(key, resTextStripJsonp);

  return resTextStripJsonp;
};
