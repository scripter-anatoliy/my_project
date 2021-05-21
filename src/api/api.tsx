import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:7542/2.0/",
    //baseURL: "https://neko-back.herokuapp.com/2.0/"
})

export const authAPI = {

    register(email: string, password: string) {
        return instance.post(`auth/register`, {email, password})
    },
    recoverPass(email: string, from: string, message: string){
        return instance.post('auth/forgot', {email, from, message})
    },
    updatePass(password: string, resetPasswordToken: string){
        return instance.post('auth/set-new-password', {password, resetPasswordToken})
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post("auth/login", {email, password, rememberMe});
    },
    checkAuth(){
        return instance.post("auth/me", {});
    },
    logout(){
        return instance.delete("auth/me", {});
    },
}

export const packsAPI = {

    getPacks(packName: string, min: number, max: number, page: number, pageCount: number){
        return instance.get(`cards/pack?packName=${packName}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`)
    },
    addPack(packName: string, privatePack: boolean){
        return instance.post('cards/pack', {cardsPack: {packName, privatePack}})
    },
    deletePack(id: string){
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack(id: string, packName: string){
        return instance.put('cards/pack', {cardsPack: {id, packName}})
    },

}

export const cardsAPI = {

    getCards(cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, page: number, pageCount: number){
        return instance.get(`cards/card?cardAnswer=${cardAnswer}&cardQuestion=${cardQuestion}&cardsPack_id=${cardsPack_id}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`)
    },
    addCard(cardsPack_id: string, question: string, answer: string, grade: number, shots: number, rating: number, type: string){
        return instance.post('cards/card', {cardsPack_id, question, answer, grade, shots, rating, type})
    },
    deleteCard(id: string){
        return instance.delete(`cards/card?id=${id}`)
    },
    updateCard(cardsPack_id: string, question: string){
        return instance.put('cards/card', {cardsPack_id, question})
    },

}

export const gradeAPI = {

    updateGrade(grade: 1|2|3|4|5, card_id: string){
        return instance.put('cards/grade', {grade, card_id})
    },

}

export const usersAPI = {

    getUsers(userName: string, min: number, max: number, page: number, pageCount: number){
        return instance.get(`social/users?userName=${userName}&min=${min}&max=${max}&page=${page}&pageCount=${pageCount}`)
    },

}

export type CardPackType={
    cardsCount: number
    created: string
    deckCover: null
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type:string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id:string
}