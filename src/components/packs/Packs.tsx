import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {packsTC} from "../../state/reducers/packs";
import {appRootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes/Routes";
import styles from "./Packs.module.css";

export const Packs = () => {

    const dispatch = useDispatch();
    let packs = useSelector<appRootStateType>(state => state.packs);

    dispatch(packsTC('english', 3, 9, 1, 4));

    return (
        <div className={styles.container}>
                
        </div>
    )
}