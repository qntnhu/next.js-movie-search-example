const es6Promise = require('es6-promise'); // eslint-disable-line import/newline-after-import
es6Promise.polyfill();
require('isomorphic-fetch'); // eslint-disable-line import/first
const cache = require('./cache');

function getIMDbApi(key, isClientSide) {
  const firstCharacter = key[0];

  if (isClientSide) {
    return `http://192.168.1.23:3000/api/search?key=${key}`;
  } else {
    return `http://sg.media-imdb.com/suggests/${firstCharacter}/${key}.json`; // JSONP api (not official)
  }
}

module.exports = async function(key, isClientSide) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const searchRes = await fetch(getIMDbApi(key, isClientSide), {
    credentials: 'omit' // default option is 'omit'
    // credentials: 'include'
  });
  if (isClientSide) {
    const resJson = await searchRes.json();

    if (resJson.status && resJson.status === 'success') {
      cache.set(key, resJson.data);

      return resJson.data; // string type
    }
  } else { // server side
    const resText = await searchRes.text();
    const reg = new RegExp(`imdb\\$${key}\\((.*)\\)`);
    const resTextStripJsonp = resText.replace(reg, '$1');

    cache.set(key, resTextStripJsonp);

    return resTextStripJsonp;
  }
};
