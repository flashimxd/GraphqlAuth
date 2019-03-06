const mongoose = require('mongoose');
const Survey  = mongoose.model('survey');
const User = mongoose.model('user');
const Store = mongoose.model('store');

function create({ nps, userId, storeId }) {
  return User.findById(userId)
    .then(user => {
      return Store.findById(storeId)
        .then(store => {
          const survey = new Survey({ nps, user, store });
          return survey.save();
        })
    })   
}

const login = null;

module.exports = { create, login };
