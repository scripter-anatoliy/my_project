import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    //baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0/"

})

export const authAPI = {
    register(email: string, password: string) {
        return instance.post(`auth/register`, {email, password})
    },
    login(login: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {login, password, rememberMe})
    }
}




