import { gql } from '@apollo/client';

export const FILTER_LOCATION = gql`
  query($name: String){
    locations(filter:{name:$name}){
      results{
        id
        name
        type
        dimension
        created
      }
    }
  }
`;
export const COUNT_ALL_LOCATION = gql`
  query ($page: Int) {
    locations(page: $page) {
      results {
        id
        name
        residents {
          name
        }
      }
    }
  }
`;
export const COUNT_LOCATION = gql`
  query ($id: ID!) {
    location(id: $id) {
      residents {
        id
        name
      }
    }
  }
`;

export const COUNT_GENDER = gql`
  query($filter: FilterCharacter) {
    characters(filter: $filter){
      info{	
        count
      }
      results {
        name
      }
    }
  }
`;


