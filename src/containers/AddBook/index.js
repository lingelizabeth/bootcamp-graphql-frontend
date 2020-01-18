/* eslint-disable linebreak-style */
import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ADD_BOOK } from './graphql'
import { GET_ALLBOOKS } from '../Home/graphql'

const AddBook = ({title}) => {
  const [addBook] = useMutation(ADD_BOOK, {
    variables: {addBookInput: {
        "title": title,
        "language": "es",
        "numPages": 305, 
        "authorId":"7f7c2928-b6ab-4555-93c3-217e219c931b",
        "publisherId":"23233450-e553-4f49-96d8-9d3d49528687"
        }
      }
    
    ,
    update: (client, {data:{addBook}}) => {
        try{
            const bookData = client.readQuery({query: GET_ALLBOOKS})
            bookData.books = [...bookData.books, addBook]
            client.writeQuery({query:GET_ALLBOOKS, bookData})
        }catch(error){
            console.log("?")
        }
        
    }

  })

  return (
  <div>
      <button type="button" onClick={addBook}>Add Book</button>
  </div>
    
    
  )
}


export default AddBook
