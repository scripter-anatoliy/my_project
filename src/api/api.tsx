import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:7542/2.0/"

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
    }

}