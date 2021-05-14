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
    grade: 0,
    shots: 0,
    rating: 0,
    type: '',
    id: '',
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
        case "CARDS/ADD_CARD":
            return {...state, 
                cardsPack_id: action.cardsPack_id,
                cardQuestion: action.cardQuestion,
                cardAnswer: action.cardAnswer,
                grade: action.grade,
                shots: action.shots,
                rating: action.rating,
                type: action.type,
            }
        case "CARDS/DELETE_CARD":
            return {...state, 
                id: action.id,
            }
        case "CARDS/UPDATE_CARD":
            return {...state, 
                cardsPack_id: action.cardsPack_id,
                cardQuestion: action.cardQuestion,
            }
        default:
            return state;
    }
}

//Action
export const getCardsAC = (cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "CARDS/GET_CARDS", cardAnswer, cardQuestion, cardsPack_id, min, max, page, pageCount} as const);
export const addCardAC = (cardsPack_id: string, cardQuestion: string, cardAnswer: string, grade: number, shots: number, rating: number, typeCard: string) => (
    {type: "CARDS/ADD_CARD", cardsPack_id, cardQuestion, cardAnswer, grade, shots, rating, typeCard} as const);
export const deleteCardAC = (id: string) => (
    {type: "CARDS/DELETE_CARD", id} as const);
export const updateCardAC = (cardsPack_id: string, cardQuestion: string) => (
    {type: "CARDS/UPDATE_CARD", cardsPack_id, cardQuestion} as const);

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
export type ActionType = GetCards | AddCard | DeleteCard | UpdateCard

export type GetCards = ReturnType<typeof getCardsAC>
export type AddCard = ReturnType<typeof addCardAC>
export type DeleteCard = ReturnType<typeof deleteCardAC>
export type UpdateCard = ReturnType<typeof updateCardAC>