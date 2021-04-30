import React from "react"
import {NavLink} from "react-router-dom"
import {PATH} from "../Routes";
import style from './Navlinks.module.css'

export const Navlinks = () => {
    return (
        <div className={style.groupLink}>
            <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
            <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
            <NavLink className={style.link} to={PATH.PASSWORD_RECOVERY}>Password Recovery</NavLink>
            <NavLink className={style.link} to={PATH.ENTERING_NEW_PASSWORD}>Entering New Password</NavLink>
            <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            <NavLink className={style.link} to={PATH.SUPER_COMPONENTS}>Super Components</NavLink>
        </div>
    )
}