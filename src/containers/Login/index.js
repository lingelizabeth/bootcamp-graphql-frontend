import React, {useState} from 'react'
import { useMutation } from '@apollo/react-hooks'
import {Input} from '../Home/styles'
import LOGIN from './graphql'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [doLogin, {token, user}] = useMutation(LOGIN, {variables:{
        email, password
    }, onCompleted:() => {localStorage.setItem('token', token)}
    })

    
    return(
    <>
        <FormInput label="email" value={email} setValue={setEmail}></FormInput>
        <FormInput label="password" value={password} setValue={setPassword}></FormInput>
        <button type="button" onClick={doLogin}>Login</button>
    </>
    )
}

const FormInput = ({label, value, setValue}) => {
    return(
    <Input placeholder = {label}
        value={value} 
        onChange={e=>setValue(e.target.value)} //setForm({ [label]: newToDo(e.target.value)})
        ></Input>)
  
  }

  export default Login