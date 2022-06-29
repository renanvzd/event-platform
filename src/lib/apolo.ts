import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4zsb1rv0hlf01uec0mkftby/master',
  cache: new InMemoryCache()
})
