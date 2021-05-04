import React, {ChangeEvent, useState} from "react";
import styles from "login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addLoginAC, loginAC} from "../../state/reducers/login";



type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}


export const Login = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [remember, setRemember] = useState(false)
    const dispatch = useDispatch()


    const loginHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const login = e.currentTarget.value
        setLoginValue(login)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.currentTarget.value
        setPasswordValue(password)
    }
    const rememberMeHandler = (e: React.FormEvent<HTMLInputElement>) => {
       setRemember(e.currentTarget.checked)
    }
    const onSubmit = () => {
        // dispatch(loginThunk(loginValue, passwordValue, true))
        dispatch(loginAC(loginValue, passwordValue, remember))
    }

    return (
        <div>
            <h1>Login</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <form>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                    <input type='text' value={loginValue} placeholder={'login'} onChange={loginHandler}/> Login
                    <input type='password' value={passwordValue} placeholder={'password'} onChange={passwordHandler}/> Password
                    <input type='checkbox' onChange={rememberMeHandler} checked={remember}  /> Remember Me
                </div>
                </form>
                <div>
                    <button onClick={onSubmit}>Login</button>
                </div>
            </div>

        </div>
    )
}