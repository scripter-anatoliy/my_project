import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {usersTC} from "../../state/reducers/users";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./Users.module.css";

export const Users = () => {

    const dispatch = useDispatch();
    let users = useSelector<appRootStateType>(state => state.users);

    dispatch(usersTC('nya', 3, 9, 1, 7));

    return (
        <div className={styles.container}>
                
        </div>
    )
}