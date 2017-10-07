const es6Promise = require('es6-promise'); // eslint-disable-line import/newline-after-import
es6Promise.polyfill();
require('isomorphic-fetch'); // eslint-disable-line import/first
const cache = require('./cache');
const fetchJsonp = require('fetch-jsonp');

function getIMDbApi(key, isClientSide) {
  const firstCharacter = key[0];

  return `https://sg.media-imdb.com/suggests/${firstCharacter}/${key}.json`; // JSONP api (not official)

  // if (isClientSide) {
  //   return `http://localhost:3000/api/search?key=${key}`;
  // } else {
  //   return `http://sg.media-imdb.com/suggests/${firstCharacter}/${key}.json`; // JSONP api (not official)
  // }
}

async function getIMDbDataServerApi(req, res) {
  let key = '';
  if (req.query) {
    key = req.query.key;
  } else if (req.key) {
    key = req.key;
  }
  let IMDbdata;
  let info = '';

  if (key) {
    IMDbdata = await getIMDbData(key); // eslint-disable-line no-use-before-define
  } else {
    info = 'Key is empty';
  }

  if (IMDbdata) {
    if (res) {
      res.json({
        status: 'success',
        data: IMDbdata
      });
    } else {
      return {
        status: 'success',
        data: IMDbdata
      };
    }
  } else {
    if (res) { // eslint-disable-line no-lonely-if
      res.json({
        status: 'success',
        data: null,
        info: info || undefined
      });
    } else {
      return {
        status: 'success',
        data: null,
        info: info || undefined
      };
    }
  }
}

async function getIMDbData(key, isClientSide) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const api = getIMDbApi(key, isClientSide);
  if (isClientSide) {
    // const resJson = await searchRes.json();
    // const resJson = await getIMDbDataServerApi({ key });
    // if (resJson.status && resJson.status === 'success') {
    //   cache.set(key, resJson.data);
    //   return resJson.data; // string type
    // }

    // let jsonData = null;
    // window[`imdb\$${key}`] = (data) => {
    //   jsonData = data;
    //   console.log('jsonData: ', jsonData);
    // };

    const res = await fetchJsonp(api, {
      // jsonpCallback: 'imdb$' + key,
      jsonpCallbackFunction: 'imdb$' + key,
    });
    const resJson = await res.json();

    return JSON.stringify(resJson);
  } else { // server side
    const searchRes = await fetch(api, {
      credentials: 'omit', // default option is 'omit'
      // credentials: 'include',
      mode: 'no-cors'
    });
    const resText = await searchRes.text();
    const reg = new RegExp(`imdb\\$${key}\\((.*)\\)`);
    const resTextStripJsonp = resText.replace(reg, '$1');

    cache.set(key, resTextStripJsonp);

    return resTextStripJsonp;
  }
}

module.exports.getIMDbDataServerApi = getIMDbDataServerApi;
module.exports.getIMDbData = getIMDbData;
