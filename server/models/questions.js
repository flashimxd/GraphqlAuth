const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
  title: String,
  answer: String,
  survey: {
    type: Schema.Types.ObjectId,
    ref: 'survey'
  }
});

mongoose.model('questions', QuestionsSchema);