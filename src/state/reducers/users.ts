import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";

const usersInitialState = {
    userName: '', 
    min: 1, 
    max: 1, 
    page: 1, 
    pageCount: 1,
}

export const usersReducer = (state: UsersInitialState = usersInitialState, action: ActionType): UsersInitialState => {
    switch (action.type) {
        case "USERS/GET_USERS":
            return {...state, 
                userName: action.userName, 
                min: action.min, 
                max: action.max, 
                page: action.page, 
                pageCount: action.pageCount,
            }
        default:
            return state;
    }
}

//Action
export const getUsersAC = (userName: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "USERS/GET_USERS", userName, min, max, page, pageCount} as const);

//TC    
export const usersTC = (userName: string, min: number, max: number, page: number, pageCount: number) => (dispatch: Dispatch) => {
    return usersAPI.getUsers(userName, min, max, page, pageCount)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}

// Type
export type UsersInitialState = typeof usersInitialState
export type ActionType = GetUsers

export type GetUsers = ReturnType<typeof getUsersAC>