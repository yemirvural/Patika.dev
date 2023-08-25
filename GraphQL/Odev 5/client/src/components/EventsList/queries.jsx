import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
query getEvents{
	events{
		id
    title
    desc
    date
    from
    to
    location_id
    user_id
  }
}
`;

export const EVENTS_SUBSCRIPTION = gql`
  subscription{
    eventCreated{
      id
      title
      desc
      date
      from
      to
      location_id
      user_id
    }
  }
`;
  
export const PARTICIPANTS_SUBSCRIPTION = gql`
  subscription{
    participantAdded{
      id
      user_id
      event_id
      username
    }
  }
`;