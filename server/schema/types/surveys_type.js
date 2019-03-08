const graphql = require('graphql');
const mongoose = require('mongoose');
const Survey = mongoose.model('survey');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} = graphql;

const SurveyType = new GraphQLObjectType({
    name: 'SurveyType',
    fields: () => ({
        id: { type: GraphQLString},
        nps: { type: GraphQLString },
        user: { 
            type: require('./user_type'),
            resolve(parentValue){
                return Survey.findById(parentValue).populate('user')
                .then(survey => {
                    return survey.user;
                  });
            }
        },
        store: { 
            type: require('./stores_types'),
            resolve(parentValue){
                return Survey.findById(parentValue).populate('store')
                .then(survey => {
                    return survey.store;
                  });
            }
        },
        questions: {
            type: new GraphQLList(require('./question_types')),
            resolve(parentValue){
                // console.log(parentValue._id);
                return Survey.findQuestions(parentValue._id);
            }
        }
    })
});

module.exports = SurveyType;
