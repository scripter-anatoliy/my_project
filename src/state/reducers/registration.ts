import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {authAPI} from "../../api/api";
import {appRootStateType} from "../store";

const initialState = {
    email: null,
    password: null,

}

type actionType = ReturnType<typeof setRegister>

type initialStateType = {
    email: null | string,
    password: null | string
}

export const registrationReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {

            }
    }


    return state
}

export const setRegister = (email: string, password: string) => (
    {type: 'SET_USER_DATA', payload: {email, password}} as const)


export const register = (email: string, password: string) => {
    return (dispatch: ThunkDispatch<appRootStateType, undefined, Action>) => {
        authAPI.register(email, password).then(response => {

        })
    }
}
