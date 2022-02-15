// servicios para el perfil del usuario

import axios from "axios"

class PerfilServices{

    async Perfil(username){
        const {data} = await axios.get(`/users/perfil/${username}`,{validateStatus:false})
        return data
    }

    async CompletarPerfil(perfil){
        const {data} = await axios.post(`/users/perfil`,perfil,{validateStatus:false})
        return data
    }
}

const perfil_services = new PerfilServices()
export default perfil_services
