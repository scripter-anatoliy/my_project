const ADD_LOGIN = 'ADD_LOGIN'

export const addLoginAC = (login: string, password: string, rememberMe: boolean) => ({type: ADD_LOGIN, login, password, rememberMe})
debugger


const initialState = {
    login: null,
    password: null,
    rememberMe: false
}

type initialStateType = typeof initialState

export const loginReducer = (state: initialStateType = initialState, action: any) => {
    debugger
    switch (action.type) {
        case ADD_LOGIN : {
            return {...state, login: action.login, password: action.login, rememberMe: action.rememberMe}
        }
    }
return state
}
type LoginActionType = {
    login: string,
    password: string,
    rememberMe: boolean
}