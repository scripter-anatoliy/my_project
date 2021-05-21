import React from "react";
import {Route, Switch} from "react-router-dom";
import {Profile} from "../components/profile/Profile";
import {Login} from "../components/login/Login";
import {PasswordRecovery} from "../components/passwordRecovery/PasswordRecovery";
import {EnteringNewPassword} from "../components/enteringNewPassword/EnteringNewPassword";
import {Registration} from "../components/registration/Registration";
import {SuperComponents} from "../components/superComponents/SuperComponents";
import {Error} from "../components/error404/Error404";
import {Nav} from "../components/nav/Nav";
import {Packs} from "../components/packs/Packs";
import {Cards} from "../components/cards/Cards";
import {Users} from "../components/users/Users";
import {Stats} from "../components/stats/Stats";

export const PATH = {
    PROFILE: '/profile',
    LOGIN: '/login',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTERING_NEW_PASSWORD: '/entering-new-password',
    REGISTRATION: '/registration',
    SUPER_COMPONENTS: '/super-components',
    PACKS: '/packs',
    CARDS: '/cards',
    USERS: '/users',
    STATS: '/stats',
}
export const Routes = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path={PATH.PROFILE} component={Profile}/>
                <Route exact path={PATH.LOGIN} component={Login}/>
                <Route exact path={PATH.PASSWORD_RECOVERY} component={PasswordRecovery}/>
                <Route exact path={PATH.ENTERING_NEW_PASSWORD} component={EnteringNewPassword}/>
                <Route exact path={PATH.REGISTRATION} component={Registration}/>
                <Route exact path={PATH.SUPER_COMPONENTS} component={SuperComponents}/>
                <Route exact path={PATH.PACKS} component={Packs}/>
                <Route exact path={PATH.CARDS} component={Cards}/>
                <Route exact path={PATH.USERS} component={Users}/>
                <Route exact path={PATH.STATS} component={Stats}/>
                <Route path='*' component={Error}/>
            </Switch>
        </div>
    )
}