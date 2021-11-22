const express =  require('express');
var { graphqlHTTP } = require('express-graphql')
const schema = require('./schema') 
const app = express();

app.get('/', (req,res)=>{
    res.send("GraphQl is amazing")
})

const root ={hello:()=>"Hi I am Elvin"}

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql:true,
}))

app.listen(8080, ()=>console.log("Running server on port"));