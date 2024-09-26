import $user_api from "../http/user_api";
import { AxiosResponse } from 'axios';



export default class AuthService{
    static login(email:string, password:string):Promise<AxiosResponse>{
        return $user_api.post('/user/login', {
            email: email,
            password: password
        });
    }

    static check():Promise<AxiosResponse>{
        return $user_api.get('/private/check');
    }
}