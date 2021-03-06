const { graphqlHTTP } = require('express-graphql');
const {graphql, buildSchema} = require('graphql');
const express = require('express');
const schema = buildSchema(
  `  type Query {
        product: String
    }`
);

const root = {product : ()=> "laptop"}

var server = express();
server.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true
}));
server.listen(4000);
// graphql(schema, '{product}', root).then(response => console.log(response))

// npm i graphql express express-graphql