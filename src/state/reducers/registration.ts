import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {authAPI} from "../../api/api";
import {appRootStateType} from "../store";

const initialState = {
    email: null,
    password: null,
    serverError: null
}

type actionType = ReturnType<typeof setRegister> | ReturnType<typeof setError>

type initialStateType = {
    email: null | string,
    password: null | string
    serverError: null | string
}

export const registrationReducer = (state: initialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
        case "SET_ERROR":
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}

export const setRegister = (email: string, password: string) => (
    {type: 'SET_USER_DATA', payload: {email, password}} as const)
export const setError = (serverError: string) => (
    {type: 'SET_ERROR', payload: {serverError}} as const)


export const register = (email: string, password: string) => {
    return (dispatch: ThunkDispatch<appRootStateType, undefined, Action>) => {
        authAPI.register(email, password).then(response => {
            dispatch(setRegister(response.data.addedUser.email, response.data.addedUser.password))
        }).catch(err => {
            dispatch(setError(err.response.data.addedUser.error))
        })
    }
}
