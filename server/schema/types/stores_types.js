const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const StoreType = new GraphQLObjectType({
    name: 'StoreType',
    fields: {
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString }
    }
});

module.exports = StoreType;
