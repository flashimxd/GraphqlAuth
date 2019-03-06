const mongoose = require('mongoose');
const Survey  = mongoose.model('survey');
const Question = mongoose.model('question');

function create({ title, answer, surveyId }) {
  return Survey.findById(surveyId)
    .then(survey => {
        const question = new Question({ title, answer, survey });
        return question.save();
    })   
}

const login = null;

module.exports = { create, login };
