import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../state/reducers/registration";
import {minLengthCreator} from "../../utils/validators/validators";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";

export const Registration = () => {

    let [emailValue, setEmailValue] = useState("")
    let [passwordValue, setPasswordValue] = useState("")
    let [passwordValue2, setPasswordValue2] = useState("")
    let [error, setError] = useState<string | null>("")

    const email = useSelector<appRootStateType, string | null>((state) => state.registration.email)
    const serverError = useSelector<appRootStateType, string | null>((state) => state.registration.serverError)

    const dispatch = useDispatch()

    useEffect(() => {
        setError(serverError)
    }, [serverError])

    useEffect(() => {
        return () => {
            setEmailValue("")
            setPasswordValue("")
            setPasswordValue2("")
        }
    }, [])

    const minLength = minLengthCreator(7)
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setEmailValue(e.currentTarget.value)
    }
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const response = minLength(e.currentTarget.value);
        if (response) {
            setError(response)
        } else {
            setError(null)
        }
        setPasswordValue(e.currentTarget.value)
    }
    const passwordHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        const response = minLength(e.currentTarget.value);
        if (response) {
            setError(response)
        } else {
            setError(null)
        }
        setPasswordValue2(e.currentTarget.value)
    }

    const onSubmit = () => {
        if (passwordValue !== passwordValue2) {
            setError('Password mismatch')
            return
        }
        dispatch(register(emailValue, passwordValue))
    }

    if (email) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.body}>
            <h2>Registration</h2>
            <div className={styles.error}>{error}</div>
            <div className={styles.inputStyle}>
                <input type="text" placeholder={'Email'} value={emailValue} onChange={emailHandler}/>
                <input type="password" placeholder={'Password'} value={passwordValue} onChange={passwordHandler}/>
                <input type="password" placeholder={'Password'} value={passwordValue2} onChange={passwordHandler2}/>
            </div>
            <div>
                <button onClick={onSubmit}>Register
                </button>
            </div>
        </div>
    )
}