const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLList } = graphql;
const UserType = require('./user_type');
const StoresType = require('./stores_types');
const SurveyTypes = require('./surveys_type');
const QuestionTypes = require('./question_types');
const Store = mongoose.model('store');
const Survey = mongoose.model('survey');
const Questions = mongoose.model('questions');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { 
    user: { 
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    stores: {
      type: new GraphQLList(StoresType),
      resolve() {
        return Store.find({});
      }
    },
    surveys: {
      type: new GraphQLList(SurveyTypes),
      resolve(parentValue, args, req) {
        return Survey.find({});
      }
    },
    questions: {
      type: new GraphQLList(QuestionTypes),
      resolve() {
        return Questions.find({});
      }
    }
  }
});

module.exports = RootQueryType;
