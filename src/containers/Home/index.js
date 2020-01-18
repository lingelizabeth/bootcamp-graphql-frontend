/* eslint-disable linebreak-style */
import React, {useState} from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { GET_ALLBOOKS, GET_BOOKSANDAUTHORS } from './graphql'
import AddBook from '../AddBook/index'
import Login from '../Login/index'
import {Input, LoginDiv} from './styles'

const Home = () => {
  const [getAuthors, {loading: authorsLoading, data: authorsData, error:authorsError, called:authorsCalled}] = 
    useLazyQuery(GET_BOOKSANDAUTHORS )
  const { loading, error, data } = useQuery(GET_ALLBOOKS)
  const [newBookText, setNewBookText] = useState("")
  const [newAuthorText, setNewAuthorText] = useState("")

  if (loading || authorsLoading) return 'Loading...'
  if (error || authorsError) return 'ERROR'

  if(!authorsCalled) return (
  <div>
    <button onClick={getAuthors}>show authors</button>
    <br></br>
    <FormInput label="Title" value={newBookText} setValue={setNewBookText}></FormInput>
    <FormInput label="Author" value={newAuthorText} setValue={setNewAuthorText}></FormInput>
    <AddBook title={newBookText} author={newAuthorText}></AddBook>
    {data.books.map(({ id, title }) => <p key={id}>{title}</p>)}
    <LoginDiv><Login></Login></LoginDiv>
  </div>)
    
  
  return (
  <div>
    
    {authorsData.books.map(({id, title, author})=> 
    <div>
        <p key={id}>{title}</p>
        <p key={author.id}>{author.firstName} {author.lastName}</p>
    </div>)}
  </div>
    
    
  )
}
// <div>Welcome to the DEV React starter!</div>
const FormInput = ({label, value, setValue}) => {
  return(
  <Input placeholder = {label}
      value={value} 
      onChange={e=>setValue(e.target.value)} //setForm({ [label]: newToDo(e.target.value)})
      ></Input>)

}

export default Home
