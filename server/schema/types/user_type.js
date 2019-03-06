const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
<<<<<<< HEAD
        id: { type: GraphQLString},
=======
        id: { type: GraphQLID },
>>>>>>> e10672f73694c5cccb7fef495df1513bd00a0d8f
        email: { type: GraphQLString }
    }
});

module.exports = UserType;
