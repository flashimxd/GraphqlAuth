const mongoose = require('mongoose');
const Survey  = mongoose.model('survey');
const Question = mongoose.model('questions');

function create({ title, answer, surveyId }) {
  return Survey.findById(surveyId)
    .then(survey => {
        const question = new Question({ title, answer, survey });
        survey.questions = [...survey.questions, question];
        return survey.save()
            .then(() => question.save())
    })   
}

const login = null;

module.exports = { create, login };
