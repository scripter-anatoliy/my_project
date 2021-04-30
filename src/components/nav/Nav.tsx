import {Navlinks} from "../../Routes/Navlinks/Navlinks";
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Navlinks/>
        </div>
    )
}