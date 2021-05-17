import {authAPI} from "../../api/api";
import {Dispatch} from "redux";

const initialState = {
    _id: "",
    avatar: "",
    userName: "",
    cardCount: 0,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH/CHECK-AUTH":
            return {...state, _id: action._id};
        case "AUTH/GET-PROFILE":
            return {...state, avatar: action.avatar, userName: action.userName, cardCount: action.cardCount};
        default:
            return state;
    }
}

export const authTC = () => (dispatch: Dispatch) => {
    return authAPI.checkAuth()
        .then((res) => {
            if (res) {
                dispatch(isAuthAC(res.data._id));
                dispatch(getProfileAC(res.data.avatar, res.data.name, res.data.publicCardPacksCount));
            }
        })
        .catch((error) => {

        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    return authAPI.logout()
        .then(() => dispatch(isAuthAC("")))
        .catch((error) => {

        })
}

export const isAuthAC = (_id: string) => ({type: "AUTH/CHECK-AUTH", _id} as const);
export const getProfileAC = (avatar: string, userName: string, cardCount: number) => (
    {type: "AUTH/GET-PROFILE", avatar, userName, cardCount} as const);

type InitialStateType = typeof initialState;
export type IsAuthType = ReturnType<typeof isAuthAC>;
export type GetProfileType = ReturnType<typeof getProfileAC>;

type ActionsType = IsAuthType | GetProfileType;