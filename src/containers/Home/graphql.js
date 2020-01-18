/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const GET_ALLBOOKS = gql`
query getBooks{
  books{
    id
    title
 }
}
`
export const GET_BOOKSANDAUTHORS=gql`
    query getBooksAndAuthors{
        books{
            id
            title
            author{
                id
                firstName
                lastName
                }
        }
    }
`
//export default GET_ALLBOOKS
