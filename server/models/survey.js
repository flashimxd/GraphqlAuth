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
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'questions'
  }]
});

SurveySchema.statics.findQuestions = function(id) {
  return this.findById(id)
    .populate('questions')
    .then(survey => survey.question);
}

mongoose.model('survey', SurveySchema);
