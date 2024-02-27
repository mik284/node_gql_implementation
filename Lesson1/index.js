import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// server setup
const server = new ApolloServer({
// typedefs
// resolvers
})


const {url} = await startStandaloneServer(server,{
    listen: {port: 40002}
})

console.log('server ready at port ', 40002);