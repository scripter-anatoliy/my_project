import React, {ChangeEvent, useState} from "react";
import styles from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {register} from "../../state/reducers/registration";

type RegisterType = {
    register: (email: string, password: string) => void

}

export const Registration = (props: RegisterType) => {

    let [emailValue, setEmailValue] = useState("")
    let [passwordValue, setPasswordValue] = useState("")

    const dispatch = useDispatch()

    const emailHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setEmailValue(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }


    const onSubmit = () => {
        dispatch(register("", ""))

    }

    return (
        <div className={styles.body}>
            <h2>Registration</h2>
            <div className={styles.inputStyle}>
                <input placeholder={'Email'} value={emailValue} onChange={emailHandler}/>
                <input placeholder={'Password'} value={passwordValue} onChange={passwordHandler}/>
                <input placeholder={'Password'} value={passwordValue} onChange={passwordHandler}/>
            </div>
            <div>
                <button onClick={onSubmit}>Register
                </button>
            </div>
        </div>
    )
}