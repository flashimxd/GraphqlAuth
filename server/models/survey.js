const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  nps: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  store: {
      type: Schema.Types.ObjectId,
      ref:'store'
  }
});

mongoose.model('survey', SurveySchema);
