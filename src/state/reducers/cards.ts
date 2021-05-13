import {cardsAPI} from "../../api/api";
import {Dispatch} from "redux";

const cardsInitialState = {
    cardAnswer: '',
    cardQuestion: '',
    cardsPack_id: '',
    min: 1,
    max: 1,
    page: 1,
    pageCount: 1,
}

export const cardsReducer = (state: CardsInitialState = cardsInitialState, action: ActionType): CardsInitialState => {
    switch (action.type) {
        case "CARDS/GET_CARDS":
            return {...state, 
                cardAnswer: action.cardAnswer,
                cardQuestion: action.cardQuestion,
                cardsPack_id: action.cardsPack_id,
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
export const getCardsAC = (cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "CARDS/GET_CARDS", cardAnswer, cardQuestion, cardsPack_id, min, max, page, pageCount} as const);

//TC    
export const cardsTC = (cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, page: number, pageCount: number) => (dispatch: Dispatch) => {
    return cardsAPI.getCards(cardAnswer, cardQuestion, cardsPack_id, min, max, page, pageCount)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}

// Type
export type CardsInitialState = typeof cardsInitialState
export type ActionType =
    GetCards

export type GetCards = ReturnType<typeof getCardsAC>