import React, {useState} from "react";
import styles from "login.module.css"




export const Login = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const rememberMeHandler = () => {
        console.log('заглушка')
    }

    return (
        <div>
            <h1>Login</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                    <input type='text' value={loginValue}/> Login
                    <input type='password' value={passwordValue}/> Password
                    <input type='checkbox' onChange={rememberMeHandler}/> Remember Me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>

        </div>
    )
}