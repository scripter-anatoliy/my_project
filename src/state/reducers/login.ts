
import {Dispatch} from "redux";
import {login} from "../../components/login/api";

const ADD_LOGIN = 'ADD_LOGIN'

export const addLoginAC = (login: string, password: string, rememberMe: boolean) => ({type: ADD_LOGIN, login, password, rememberMe})

type initialStateType = {
    login: null | string,
    password: null | string,
    rememberMe: null | boolean
}

const initialState = {
    login: null,
    password: null,
    rememberMe: false
}

export const loginReducer = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_LOGIN : {
            return {...state, login: action.login, password: action.password, rememberMe: action.rememberMe}
        }
    }
return state
}

export const loginAC = (login: string, password: string, rememberMe: boolean) => ({type: ADD_LOGIN, login, password, rememberMe})

export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    return login(email, password, rememberMe)
        .then((res) => {

        })
        .catch((error) => {

        })
}

