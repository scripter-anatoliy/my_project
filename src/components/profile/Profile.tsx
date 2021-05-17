import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {usersTC} from "../../state/reducers/users";
import {logoutTC} from "../../state/reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {appRootStateType} from "../../state/store";
import styles from './Profile.module.css';

export const Profile = () => {
    const dispatch = useDispatch();
    let isAuth = useSelector<appRootStateType>(state => state.auth._id);
    let avatar = useSelector<appRootStateType, string>(state => state.auth.avatar)
    let userName = useSelector<appRootStateType, string>(state => state.auth.userName)
    let cardCount = useSelector<appRootStateType, number>(state => state.auth.cardCount)

    const onClickStatsHandler = useCallback(() => {
        dispatch(usersTC('nya', 3, 9, 1, 7))
    },[dispatch]);

    const onClickLogoutHandler = useCallback(() => {
        dispatch(logoutTC())
    },[dispatch]);

    if(!isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={styles.container}>
            <h2>Profile</h2>
            <button onClick={onClickStatsHandler}>Show users</button>
            <button onClick={onClickLogoutHandler}>Logout</button>
            <img src={avatar} alt="avatar"/>
            <h3>Hello {userName}</h3>
            <h4>You have {cardCount} packs</h4>
        </div>
    )
}