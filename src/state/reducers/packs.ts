import {packsAPI} from "../../api/api";
import {Dispatch} from "redux";

const packsInitialState = {
    packName: '',
    min: 1,
    max: 1,
    page: 1,
    pageCount: 1,
    privatePack: false,
    id: '',
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
        case "PACKS/ADD_PACK":
            return {...state, 
                packName: action.packName,
                privatePack: action.privatePack,
            }
        case "PACKS/DELETE_PACK":
            return {...state, 
                id: action.id,
            }
        case "PACKS/UPDATE_PACK":
            return {...state, 
                id: action.id,
                packName: action.packName,
            }
        default:
            return state;
    }
}

//Action
export const getPacksAC = (packName: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "PACKS/GET_PACKS", packName, min, max, page, pageCount} as const);
export const addPackAC = (packName: string, privatePack: boolean) => (
    {type: "PACKS/ADD_PACK", packName, privatePack} as const);
export const deletePackAC = (id: string) => (
    {type: "PACKS/DELETE_PACK", id} as const);
export const updatePackAC = (id: string, packName: string) => (
    {type: "PACKS/UPDATE_PACK", id, packName} as const);

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
export type ActionType = GetPacks | AddPack | DeletePack | UpdatePack

export type GetPacks = ReturnType<typeof getPacksAC>
export type AddPack = ReturnType<typeof addPackAC>
export type DeletePack = ReturnType<typeof deletePackAC>
export type UpdatePack = ReturnType<typeof updatePackAC>