/* eslint-disable linebreak-style */
import gql from 'graphql-tag'

export const ADD_BOOK = gql`
mutation addBook($addBookInput:AddBookInput!){
  addBook(input: $addBookInput){
    id
    title
    language
    numPages
    authorId
    publisherId
  } 
}
`
//export default ADD_BOOK
