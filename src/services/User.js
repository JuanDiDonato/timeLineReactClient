// servicios para el usuario

import axios from "axios"

class UserServices{

    async Seguir(friend){
        const {data} = await axios.post(`/users/friends`,{friend},{validateStatus:false})
        return data
    }
}

const user_services = new UserServices()
export default user_services
