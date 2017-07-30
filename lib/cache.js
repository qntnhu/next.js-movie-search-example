import LRU from 'lru-cache';

const options = {};
const cache = new LRU(options);

export default cache;
