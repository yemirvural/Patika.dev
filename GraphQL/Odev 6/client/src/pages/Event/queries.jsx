import { gql } from '@apollo/client';

export const GET_EVENT = gql`
query getEvent($id: ID!){
	event(id: $id){
		id
    title
    desc
    date
    from
    to
    location_id
    user_id
    location{
			id
			name
      desc
		}
    user{
			username
      email
    }
    participants{
			username
    }
  }
}
`;

export const GET_PARTICIPANTS = gql`
  query getParticipants($id: ID!){
    event(id: $id){
      participants{
        id
        user_id
        event_id
        username
      }
    }
  }
`;

export const PARTICIPANT_SUBSCRIPTION = gql`
  subscription participantAdded($id:ID!){
    participantAdded(id:$id){
      id
      user_id
      event_id
      username
    }
  }
`;
