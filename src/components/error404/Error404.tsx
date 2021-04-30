import React from "react";
import {NavLink} from "react-router-dom";
import style from './Error404.module.css'
import {PATH} from "../../Routes/Routes";

export const Error = () => {
    return (
        <div className={style.errorContainer}>
            <div className={style.error}>
                <h1>404 Error page</h1>
                <p>Sorry, This page doesn't exist</p>
                <NavLink className={style.link} to={PATH.PROFILE}>Go To Profile</NavLink>
            </div>
        </div>
    )
}