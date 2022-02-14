// metodos para loguedUser

// servicios
import user_services from "../../../services/User";

class LoguedUserFunctions{

    editarPerfil(perfil){
        user_services.CompletarPerfil(perfil).then(data => {
            console.log(data)
        })
    }

    crearPost(post){
        user_services.CrearPost(post).then(data => {
            console.log(data)
        })
    }
}

const logued_user_functions = new LoguedUserFunctions()
export default logued_user_functions