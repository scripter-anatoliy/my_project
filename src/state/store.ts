import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/login";
import {profileReducer} from "./reducers/profileReducer";
import {registrationReducer} from "./reducers/registration";
import {passwordRecoveryReducer} from "./reducers/passwordRecovery";
import {enteringNewPasswordReducer} from "./reducers/enteringNewPassword";

const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    enteringNewPassword: enteringNewPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
type appRootStateType = ReturnType<typeof rootReducer>