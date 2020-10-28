import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'



export const LoginScreen = () => {
    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: 'jhd067@hotmail.com',
        password: '12345'

    });
    const { email, password } = formValues;
    const handleLogin = (e) => {
        console.log(email, password);
        e.preventDefault();
        dispatch(login(12345, 'Hernando'));
    }
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }
    return ( < >
        <
        h3 className = "auth_title" > Log < /h3>  <
        form onSubmit = { handleLogin } >
        <
        input type = 'text'
        placeholder = 'Email'
        name = 'email'
        className = 'auth_input'
        autoComplete = 'off'
        value = { email }
        onChange = { handleInputChange } >


        <
        /input> <
        input type = 'password'
        placeholder = 'Password'
        name = 'password'
        className = 'auth_input'
        autoComplete = 'off'
        value = { password }
        onChange = { handleInputChange } >
        <
        /input> <
        button type = 'submit'
        className = 'btn btn-primary btn-block'
        onSubmit = { handleLogin } >

        Login <
        /button> <
        hr / >
        <
        div className = 'auth_social-networks' >
        <
        p > Login with social networks < /p> <
        div className = "google-btn"
        onClick = { handleGoogleLogin } >
        <
        div className = "google-icon-wrapper" >
        <
        img className = "google-icon"
        src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt = "google button" / >
        <
        /div> <
        p className = "btn-text" >
        <
        b > Sign in with google < /b> < /
        p > <
        /div> < /
        div >
        <
        Link to = "/auth/register" >
        Create new acount <
        /Link>


        <
        /form> </ >
    )

}