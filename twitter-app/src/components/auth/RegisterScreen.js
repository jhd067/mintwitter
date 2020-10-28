import React from 'react'
import { Link } from 'react-router-dom'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'


export const RegisterScreen = () => {

    const [formValues, handelInputChange] = useForm({
        name: 'Julian Holguin Diaz',
        email: 'jhd067@hotmail.com',
        password: '12345',
        password2: '12345'
    })
    const { name, email, password, password2 } = formValues;
    const handleRegister = (e) => {

        e.preventDefault();

        console.log(name, email, password, password2)
    }
    return ( < >
        <
        h3 className = "auth_title" > Register < /h3> <
        form onSubmit = { handleRegister } >

        <
        input type = 'text'
        placeholder = 'Name'
        name = 'name'
        className = 'auth_input'
        value = { name }
        onChange = { handelInputChange } >


        <
        /input> <
        input type = 'text'
        placeholder = 'Email'
        name = 'email'
        className = 'auth_input'
        value = { email }
        onChange = { handelInputChange } >


        <
        /input> <
        input type = 'password'
        placeholder = 'Password'
        name = 'password'
        className = 'auth_input'
        autoComplete = 'off'
        value = { password }
        onChange = { handelInputChange } >
        <
        /input> <
        input type = 'password'
        placeholder = 'Confirm'
        name = 'password2'
        className = 'auth_input'
        autoComplete = 'off'
        value = { password2 }
        onChange = { handelInputChange } >
        <
        /input>


        <
        button type = 'submit'
        className = 'btn btn-primary btn-block mb-5' >
        Register <
        /button> <
        hr / >


        <
        Link to = "/auth/login"
        className = 'link' >
        Already registered ? <
        /Link>


        <
        /form> < / >
    )
}