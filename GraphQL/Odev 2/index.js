import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { events, locations, users, participants }  from './data.js';
import { nanoid } from "nanoid";

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

  input AddUserInput {
    username: String!
    email: String!
  }

  input UpdataUserInput {
    username: String
    email: String
  }

  input AddEventInput {
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
  }

  input AddParticipantInput{
    user_id: ID!
    event_id: ID!
  }

  input AddLocationInput {
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  input UpdataLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }

  input UpdataParticipantInput {
    user_id: ID
    event_id: ID
  }

  type DeleteAllOutput{
    count: Int!
  }

  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    username: String
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

  type Mutation {
    addUser(data: AddUserInput!): User!
    updateUser(id: ID!, data: UpdataUserInput!): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!
    addEvent(data: AddEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!
    addLocation(data: AddLocationInput!): Location!
    deletLocation(id: ID!): Location!
    updateLocation(id: ID!, data: UpdataLocationInput!): Location!
    deleteAllLocations: DeleteAllOutput!
    addParticipant(data: AddParticipantInput!): Participant!
    deleteParticipant(id: ID!): Participant!
    updateParticipant(id: ID!, data: UpdataParticipantInput!): Participant!
    deleteAllParticipants: DeleteAllOutput!
  }
`
const resolvers = {
    Mutation: {
        addUser: (parent, {data}) => {
          const newUser = {id: nanoid(), ...data}
          users.push(newUser)
          return newUser;
        },
        deleteUser: (parent, {id}) => {
          const userIndex = users.findIndex(user => user.id === id)
          
          if(userIndex === -1){
            throw new Error('User not found!')
          }
          
          const deletedUser = users[userIndex]
          users.splice(userIndex, 1)
          return deletedUser;
        },
        updateUser: (parent, {id, data}) => {
          const userIndex = users.findIndex(user => user.id === id)

          if(userIndex === -1 ){
            throw new Error('User not found!')
          }

          users[userIndex] = {
            ...users[userIndex],
            ...data
          }

          return users[userIndex];
        },
        deleteAllUsers: () => {
          const length = users.length;
          users.splice(0, length);
          return {count: length};
        },
        addEvent: (parent, {data}) => {
          const newEvent = {
            id: nanoid(),
            ...data
          }
          events.push(newEvent)
          return newEvent;
        },
        updateEvent: (parent, {id, data}) => {
          const eventIndex = events.findIndex(el => el.id === id)
          if(eventIndex === -1){
            throw new Error("Event not found!");
          }
          const newEvent = events[eventIndex] = {
            ...events[eventIndex],
            ...data
          }
          return newEvent;
        },
        deleteEvent: (parent, {id}) => {
          const eventIndex = events.findIndex(event => event.id === id)
          
          if(eventIndex === -1){
            throw new Error("Event not found!")
          }
          const deletedEvent = events[eventIndex];
          events.splice(eventIndex, 1)
          return deletedEvent;
        },
        deleteAllEvents: () => {
          const length = events.length;
          events.splice(0, length);
          return {count: length};
        },
        addLocation: (parenti, {data}) => {
          const location = {
            id: nanoid(),
            ...data
          }
          locations.push(location)
          return location;
        },
        deletLocation: (parent, {id}) => {
          const locationIndex = locations.findIndex(location => location.id === id)

          if(locationIndex === -1){
            throw new Error("Location not found!")
          }
          const deletedLocation = locations[locationIndex]
          locations.splice(locationIndex, 1)
          return deletedLocation;
        },
        updateLocation: (parent, {id, data}) => {
          const locationIndex = locations.findIndex(location => location.id === id)

          if(locationIndex === -1){
            throw new Error("Location not found!")
          }
          const updatedLocation = locations[locationIndex] = {
            ...locations[locationIndex],
            ...data
          }
          return updatedLocation;
        },
        deleteAllLocations: () => {
          const length = locations.length
          locations.splice(0, length)
          return {count: length};
        },
        addParticipant: (parent, {data}) => {
          const participant = {
            id: nanoid(),
            ...data
          }
          participants.push(participant)
          return participant;
        },
        deleteParticipant: (parent, {id}) => {
          const participantIndex = participants.findIndex(participant => participant.id == id)
          if(participantIndex === -1){
            throw new Error('Participant not found!')
          } 
          const deletedParticipant= participants[participantIndex]
          participants.splice(participantIndex, 1)
          return deletedParticipant;
        },
        updateParticipant: (parent, {id, data}) =>{
          const participantIndex = participants.findIndex(participant => participant.id === id)

          if(participantIndex === -1){
            throw new Error("Participant not found!")
          }

          const updatedParticipant = participants[participantIndex] = {
            ...participants[participantIndex],
            ...data
          }
          return updatedParticipant;
        },
        deleteAllParticipants: () => {
          const length = participants.length;
          participants.splice(0, length)
          return {count: length};
        }
    },
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