const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: String,
  address: String,
  phone: String
});

mongoose.model('store', StoreSchema);
