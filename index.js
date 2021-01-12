import express from 'express';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.get('/', (req, res )=> {
    res.send("GraphQL is amaze!")
});

const root = {hello: ()=> "Hi I am Nil"};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8989, () => console.log("started"))