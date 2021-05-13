import axios from 'axios'


export const login =(email: string, password: string, rememberMe: boolean) => {
    return axios.post('http://localhost:7542/2.0/auth/login', {email, password, rememberMe}, {
            withCredentials: true,
        })
}
