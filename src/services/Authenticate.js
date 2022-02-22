// servicios para registrar e iniciar sesion de usuarios
import axios from "axios"

class AuthService{

    async Register(user){
        const {data} = await axios.post('/users/register',user,{validateStatus:false})
        return data
    }

    async Login(user){
        const {data} = await axios.post('/users/login',user,{validateStatus:false})
        return data
    }

    async Authenticate(){
        const {data} = await axios.get('/users/user/isAuthenticate',{validateStatus:false})
        return data
    }

    async Logout(){
        const {data} = await axios.get('/users/user/logout',{validateStatus:false})
        return data
    }

}

const auth_services = new AuthService()
export default auth_services

