import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/login";
import {profileReducer} from "./reducers/profileReducer";
import {registrationReducer} from "./reducers/registration";
import {passwordRecoveryReducer} from "./reducers/passwordRecovery";
import {enteringNewPasswordReducer} from "./reducers/enteringNewPassword";
import {packsReducer} from "./reducers/packs";
import {cardsReducer} from "./reducers/cards";
import {usersReducer} from "./reducers/users";
import {authReducer} from "./reducers/AuthReducer";
import {gradeReducer} from "./reducers/grade";


const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringNewPassword: enteringNewPasswordReducer,
    packs: packsReducer,
    cards: cardsReducer,
    users: usersReducer,
    auth: authReducer,
    grade: gradeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type appRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store