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