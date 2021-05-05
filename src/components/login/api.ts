import axios from 'axios'


export const login =(login: string, password: string, rememberMe: boolean) => {
    return axios.post('"http://localhost:7542/2.0/auth/login', {login, password, rememberMe}, {
            withCredentials: true,
        })
}
