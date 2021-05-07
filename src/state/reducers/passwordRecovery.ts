import {authAPI} from "../../api/api";
import {Dispatch} from "redux";

const passwordRecoveryInitialState = {
    email: '',
    from: '',
    message:'' ,
    password:'',
    redirect: false,

}

export const passwordRecoveryReducer = (state: PasswordRecoveryInitialState = passwordRecoveryInitialState, action: ActionType): PasswordRecoveryInitialState => {
    switch (action.type) {
        case "RECOVERY/PASSWORD":
            return {...state, password: action.password}
        case "RECOVERY/NEW-PASSWORD": {
            return {
                ...state,
                email: action.email,
                from: action.from,
                message: action.message
            }
        }
        case "RECOVERY/REDIRECT-TRUE": {
            return {...state, redirect: false}
        }
        case "RECOVERY/REDIRECT-FALSE": {
            return {...state, redirect: true}
        }
        default:
            return state

    }
}

//Action
export const resPassword = (email: string, from: string, message: string) =>
    ({type: "RECOVERY/NEW-PASSWORD", email, from, message} as const)
export const redirectT = () => ({type: "RECOVERY/REDIRECT-TRUE"} as const)
export const redirectF = () => ({type: "RECOVERY/REDIRECT-FALSE"} as const)
export const passwordAC = (password: string) => ({type: "RECOVERY/PASSWORD", password} as const)

//TC     password recover link ???
export const resPasswordTC = (email: string, from: string, message: string) => (dispatch: Dispatch) => {
    return authAPI.recoverPass(email, from, message)
        .then((res) => {
            dispatch(resPassword(email, from, message))
        })
        .catch((error) => alert(error))
}

// Type
export type PasswordRecoveryInitialState = typeof passwordRecoveryInitialState
export type ActionType =
    | ResPassword
    | RedirectT
    | RedirectF
    | Password

export type ResPassword = ReturnType<typeof resPassword>
export type RedirectT = ReturnType<typeof redirectT>
export type RedirectF = ReturnType<typeof redirectF>
export type Password = ReturnType<typeof passwordAC>