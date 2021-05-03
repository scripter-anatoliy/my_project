import React, {ChangeEvent, useState} from "react";
import styles from "login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addLoginAC} from "../../state/reducers/login";



type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const Login = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const dispatch = useDispatch()

    const loginHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const login = e.currentTarget.value
        setLoginValue(login)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.currentTarget.value
        setPasswordValue(password)
    }
    const rememberMeHandler = () => {

    }
    const onSubmit = () => {
        dispatch(addLoginAC(loginValue, passwordValue, true))
    }

    return (
        <div>
            <h1>Login</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <form>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                    <input type='text' value={loginValue} placeholder={'login'} onChange={loginHandler}/> Login
                    <input type='password' value={passwordValue} placeholder={'password'} onChange={passwordHandler}/> Password
                    <input type='checkbox' onChange={rememberMeHandler}/> Remember Me
                </div>
                </form>
                <div>
                    <button onClick={onSubmit}>Login</button>
                </div>
            </div>

        </div>
    )
}