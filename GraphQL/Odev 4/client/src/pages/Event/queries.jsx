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
  }
}
`;