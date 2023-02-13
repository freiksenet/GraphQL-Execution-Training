import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import { parse, defaultFieldResolver, responsePathAsArray} from "graphql"
import fs from "fs";
import path from "path";
import { resolvers } from "./resolvers";


const typeDefs = parse(fs.readFileSync(path.join(__dirname, "./schema.gql"), { encoding: "utf-8" }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  fieldResolver: (source, args, context, info) => {
    console.log(`>>> ${responsePathAsArray(info.path).join(".")} called:`, source);
    return defaultFieldResolver(source, args, context, info)
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
