var { graphql, buildSchema } = require('graphql')

//Constructs schema using graphql schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

//root provides a resolver function for API endpoint
var root = {
  hello: () => {
    return 'Hello World!'
  }
}

//Run the GraphQL query '{hello}' and print out response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response)
})
