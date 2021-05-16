import {packsAPI, CardPackType} from "../../api/api";
import {Dispatch} from "redux";

const packsInitialState = {
    packs: [] as Array<CardPackType>,
    packName: '',
    min: 1,
    max: 1,
    page: 1,
    pageCount: 1,
    privatePack: false,
    id: '',
    cardPacksTotalCount: 0,
}

export const packsReducer = (state: PacksInitialState = packsInitialState, action: ActionType): PacksInitialState => {
    switch (action.type) {
        case "PACKS/GET_PACKS":
            return {...state, 
                packs: action.packs,
                cardPacksTotalCount: action.cardPacksTotalCount,
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
export const getPacksAC = (packs: Array<CardPackType>, cardPacksTotalCount: number, page: number, pageCount: number) => (
    {type: "PACKS/GET_PACKS", packs, cardPacksTotalCount, page, pageCount} as const);
export const addPackAC = (packName: string, privatePack: boolean) => (
    {type: "PACKS/ADD_PACK", packName, privatePack} as const);
export const deletePackAC = (id: string) => (
    {type: "PACKS/DELETE_PACK", id} as const);
export const updatePackAC = (id: string, packName: string) => (
    {type: "PACKS/UPDATE_PACK", id, packName} as const);

//TC    
export const getPacksTC = (packName: string, min: number, max: number, page: number, pageCount: number) => (dispatch: Dispatch) => {
    return packsAPI.getPacks(packName, min, max, page, pageCount)
        .then((res) => {
            dispatch(getPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount, res.data.page, res.data.pageCount));
        })
        .catch((error) => alert(error))
}
export const addPackTC = (packName: string, privatePack: boolean) => (dispatch: Dispatch) => {
    return packsAPI.addPack(packName, privatePack)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}
export const deletePackTC = (id: string) => (dispatch: Dispatch) => {
    return packsAPI.deletePack(id)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}
export const updatePackTC = (id: string, packName: string) => (dispatch: Dispatch) => {
    return packsAPI.updatePack(id, packName)
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