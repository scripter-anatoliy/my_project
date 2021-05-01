import {Action} from "redux";
import { ThunkDispatch } from "redux-thunk";
import {authAPI} from "../../api/api";
import {appRootStateType} from "../store";

const initialState = {}

type initialStateType = typeof initialState

export const registrationReducer = (state: initialStateType = initialState, action: actionType) => {



    return state
}
type actionType = {}

export const register = (email: string, password: string) => {
    return (dispatch: ThunkDispatch<appRootStateType, undefined, Action>) => {
        authAPI.register(email, password).then(response => {

        })
    }
}
