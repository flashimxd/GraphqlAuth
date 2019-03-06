const mongoose = require('mongoose');
const graphql = require('graphql');
const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const StoreType = require('./types/stores_types');
const SurveyType = require('./types/surveys_type');
const QuestionType = require('./types/question_types');
const AuthService = require('../services/auth');
const StoreService = require('../services/stores');
const SurveyService = require('../services/survey');
const QuestionService = require('../services/question');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: { 
            type: UserType,
            args: { 
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req){
                return AuthService.signup({ email, password, req });
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req){
                const { user }  = req;
                req.logout()
                return user;
            }
        },
        login: { 
            type: UserType,
            args: { 
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req){
                return AuthService.login({ email, password, req });
            }
         },
         createStore: {
             type: StoreType,
             args: {
                 name: { type: GraphQLString},
                 address: { type: GraphQLString},
                 phone: { type: GraphQLString }
             },
             resolve(parentValue, { name, address, phone}, req) {
                 return StoreService.create({ name, address, phone, req });
             }
         },
         createSurvey: {
            type: SurveyType,
            args: {
                nps: { type: GraphQLString},
                userId: { type: GraphQLID },
                storeId: { type: GraphQLID}
            },
            resolve(parentValue, { nps, userId, storeId }) {
                return SurveyService.create({nps, userId, storeId});
            }
         },
         createQuestion: {
            type: QuestionType,
            args: {
                title: { type: GraphQLString},
                answer: { type: GraphQLString},
                surveyId: { type: GraphQLID},
            },
            resolve(parentValue, {title, answer, surveyId}) {
                return QuestionService.create({title, answer, surveyId});
            }
         }
    }
});

module.exports = mutation;
