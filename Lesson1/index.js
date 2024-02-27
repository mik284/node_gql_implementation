import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";




import { typeDefs } from "./shema";



// server setup
const server = new ApolloServer({
// typedefs -------definations of types of data to expose #schema
typeDefs,
// resolvers ---handle incoming req and return to the client
})


const {url} = await startStandaloneServer(server,{
    listen: {port: 40002}
})

console.log('server ready at port ', 40002);