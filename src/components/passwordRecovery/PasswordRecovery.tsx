import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resPasswordTC} from "../../state/reducers/passwordRecovery";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./PasswordRecovery.module.css";

export const PasswordRecovery = () => {

    const dispatch = useDispatch();
    let redirect = useSelector<appRootStateType, boolean>(state => state.passwordRecovery.redirect);

    let [mail, setMail] = useState('nya-admin@nya.nya');
    let [SplitFlap, setSplitFlap] = useState(false);
    let [originalPass, setOriginalPass] = useState('1qazxcvBG');
    let [repeatedPass, setRepeatedPass] = useState('1qazxcvBG');

    const updateMail = (e: React.FormEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value);
    }

    const updateFirstPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setOriginalPass(e.currentTarget.value);
    }

    const updateLastPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setRepeatedPass(e.currentTarget.value);
    }
    
    let message = `<div style="background-color: lime; padding: 15px">password recovery link: 
                    <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`;
    let from = "test-front-admin <ai73a@yandex.by>";
    const recoveryMail = useCallback( ()=> {
        if (mail === 'nya-admin@nya.nya'){
            setSplitFlap(true);
            dispatch(resPasswordTC(mail, from, message));   //alert reducer reverseRassword
        }else {
            setSplitFlap(false);
        }
    },[mail])

    const recoveryPass = useCallback( ()=> {
        if (setOriginalPass === setRepeatedPass){
            
        }
    },[setOriginalPass, setRepeatedPass]);

    if (redirect) {
        return (
            <Redirect from={PATH.LOGIN} to={PATH.LOGIN}/>
        )
    }

    else{
        return (
            <div className={styles.container}>
                <h1>Recovery</h1>
                <span>email</span>
                <input onChange={updateMail} value={mail}/>
                <div style={{height:'10px'}}></div>
                <button onClick={recoveryMail}>Send mail</button>
                {SplitFlap &&
                <div style={{margin:"20px"}}>
                    <span>password</span>
                    <input onChange={updateFirstPassword} value={originalPass} />
                    <div style={{height:'10px'}}></div>
                    <span>password</span>
                    <input onChange={updateLastPassword} value={repeatedPass} />
                    <div style={{height:'10px'}}></div>
                    <button onClick={recoveryPass}>Recovery pass</button>
                </div>
                }
            </div>
        )
    }
}