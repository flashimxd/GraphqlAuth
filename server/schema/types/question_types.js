const graphql = require('graphql');
const mongoose = require('mongoose');
const Questions = mongoose.model('questions');

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const QuestionType = new GraphQLObjectType({
    name: 'QuestionType',
    fields: {
        id: { type: GraphQLString},
        title: { type: GraphQLString },
        answer: { type: GraphQLString },
        survey: { 
            type: require('./surveys_type'),
            resolve(parentValue){
                return Questions.findById(parentValue).populate('survey')
                .then(questions => {
                    return questions.survey;
                  });
            }
        }
    }
});

module.exports = QuestionType;
