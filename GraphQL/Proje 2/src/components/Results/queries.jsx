import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
    query($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter){
            info{
                count
            pages
            next
            prev
        }
        results{
                id
            name
            status
            species
            type
            gender
            image
            origin{
                    id
            name
            type
            }
            location{
                    id
            name
            }
        }
        }
    }	
  
`;