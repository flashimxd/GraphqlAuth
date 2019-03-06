const mongoose = require('mongoose');
const Store  = mongoose.model('store');

function create({ name, address, phone, req }) {
  const store = new Store({ name, address, phone });
  if (!name) { throw new Error('You must provide a name.'); }
   return store.save();
}

const login = null;

module.exports = { create, login };
