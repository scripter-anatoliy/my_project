import React, {useState} from "react";
import styles from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {register} from "../../state/reducers/registration";

type RegisterType = {
    register: (email: string, password: string) => void
}

export const Registration = () => {

    let [emailValue, setEmailValue] = useState("")
    let [passwordValue, setPasswordValue] = useState("")

    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(register("", ""))
    }

    return (
        <div className={styles.body}>
            <h2>Registration</h2>
            <div className={styles.inputStyle}>
                <input placeholder={'Email'} value={emailValue}/>
                <input placeholder={'Password'} value={passwordValue}/>
                <input placeholder={'Password'} value={passwordValue}/>
            </div>
            <div>
                <button onClick={onSubmit}>Register
                </button>
            </div>
        </div>
    )
}