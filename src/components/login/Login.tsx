import React, {useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../state/reducers/login";
import {Redirect} from "react-router-dom";
import {appRootStateType} from "../../state/store";
import styles from './Login.module.css';

export const Login = () => {
    const dispatch = useDispatch();
    let isAuth = useSelector<appRootStateType>(state => state.auth._id);
    let [email, setEmail] = useState("Nickolay@Arbuzov.tech");
    let [password, setPassword] = useState("11111111");
    let [rememberMe, setRememberMe] = useState(false);

    const onChangeHandlerEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }
    const onChangeHandlerPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }
    const onChangeHandlerRememberMe = (e: React.FormEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked);
    }

    const onClickHandler = useCallback(() => {
        dispatch(loginTC(email, password, rememberMe))
    },[email, password, rememberMe]);

    if(isAuth) return <Redirect to={"/profile"}/>;

    return (
        <div className={styles.loginWrapper}>
            <h2>Login</h2>
            <h3>account</h3>
            <input onChange={onChangeHandlerEmail} value={email}/>
            <h3>password</h3>
            <input type="password" onChange={onChangeHandlerPassword} value={password}/>
            <h3>remember me</h3>
            <input type="checkbox" title={"remember Me"} onClick={onChangeHandlerRememberMe} checked={rememberMe}/>
            <button onClick={onClickHandler}>LogIn</button>
        </div>
    )
}