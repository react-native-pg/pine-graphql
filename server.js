const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql');
const express = require('express');
const schema = buildSchema(
    `  type Query {
        product: String,
        getProducts(length:Int): [Int]
    }`
);

const root = { //controller
    product: () => "laptop",  //controller method
    getProducts: (argu)=> {
        //DB
        console.log(argu)
        return [1,2,3].splice(0, argu.length)
    }
}

var server = express();
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
server.listen(4000);
// graphql(schema, '{product}', root).then(response => console.log(response))

// npm i graphql express express-graphql