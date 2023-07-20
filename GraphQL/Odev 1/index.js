import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { events, locations, users, participants }  from './data.js';

const typeDefs = `#graphql
  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    user: User!
    location: Location!
    participants: [Participant!]!
  }

  type Location {
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]!
  }

  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    username: String!
  }

  type Query {
    events: [Event!]!
    event(id: ID!): Event!

    locations: [Location!]!
    location(id: ID!): Location!

    users: [User!]!
    user(id: ID!): User!

    participants: [Participant!]!
    participant(id: ID!): Participant!

  }
`
const resolvers = {
    Query: {
      // Event
      events: () => events,
      event: (parent, args) => events.find(event => event.id === args.id),
      
      // Location
      locations: () => locations,
      location: (parent, args) => locations.find(location => location.id === args.id),
      
      // User
      users: () => users,
      user: (parent, args) => users.find(user => user.id === args.id),
      
      // Participant
      participants: () => participants,
      participant: (parent, args) => participants.find(participant => participant.id === args.id),
    },
    
    User: {
      events: (parent) => events.filter(event => event.user_id === parent.id)
    },
    Event: {
      user: (parent) => users.find(user => user.id === parent.user_id),
      location : (parent) => locations.find(location => location.id === parent.location_id),
      participants: (parent) => participants.filter(participant => participant.event_id === parent.id)
    },
    Participant: {
      username: (parent) => users.find(user => user.id === parent.user_id).username
    }
  };


  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);