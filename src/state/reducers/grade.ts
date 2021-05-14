import {gradeAPI} from "../../api/api";
import {Dispatch} from "redux";

const gradeInitialState = {
    grade: 1, 
    card_id: '',
}

export const gradeReducer = (state: GradeInitialState = gradeInitialState, action: ActionType): GradeInitialState => {
    switch (action.type) {
        case "GRADE/UPDATE_GRADE":
            return {...state, 
                grade: action.grade, 
                card_id: action.card_id, 
            }
        default:
            return state;
    }
}

//Action
export const updateGradeAC = (grade: 1|2|3|4|5, card_id: string) => (
    {type: "GRADE/UPDATE_GRADE", grade, card_id} as const);

//TC    
export const updateGradeTC = (grade: 1|2|3|4|5, card_id: string) => (dispatch: Dispatch) => {
    return gradeAPI.updateGrade(grade, card_id)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}

// Type
export type GradeInitialState = typeof gradeInitialState
export type ActionType = UpdateGrade

export type UpdateGrade = ReturnType<typeof updateGradeAC>