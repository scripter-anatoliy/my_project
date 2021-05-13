import {packsAPI} from "../../api/api";
import {Dispatch} from "redux";

const packsInitialState = {
    packName: '',
    min: 1,
    max: 1,
    page: 1,
    pageCount: 1,
}

export const packsReducer = (state: PacksInitialState = packsInitialState, action: ActionType): PacksInitialState => {
    switch (action.type) {
        case "PACKS/GET_PACKS":
            return {...state, 
                packName: action.packName,
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
export const getPacksAC = (packName: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "PACKS/GET_PACKS", packName, min, max, page, pageCount} as const);

//TC    
export const packsTC = (packName: string, min: number, max: number, page: number, pageCount: number) => (dispatch: Dispatch) => {
    return packsAPI.getPacks(packName, min, max, page, pageCount)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}

// Type
export type PacksInitialState = typeof packsInitialState
export type ActionType =
    GetPacks

export type GetPacks = ReturnType<typeof getPacksAC>