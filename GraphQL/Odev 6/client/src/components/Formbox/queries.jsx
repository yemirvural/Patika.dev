import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
mutation addEvent($data: AddEventInput!){
        addEvent(data: $data){
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

export const GET_LOCATIONS = gql`
query getLocations{
    locations{
        id
        name
        desc
        lat
        lng
    }
}
`;
export const GET_USERS = gql`
query getUsers{
    users{
        id
        username
        email
    }
}
`;