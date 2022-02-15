// metodos para loguedUser

// servicios
import post_services from "../../../services/Post";
import perfil_services from "../../../services/Perfil";

class LoguedUserFunctions{

    obtenerPosts(username){
       const data = post_services.ObtenerPosts(username)
       return data
    }

    editarPerfil(perfil){
        perfil_services.CompletarPerfil(perfil).then(data => {
            console.log(data)
        })
    }

    crearPost(post){
        post_services.CrearPost(post).then(data => {
            console.log(data)
        })
    }

    editarPost(id,post){
       post_services.EditarPost(id,post).then(data => {
            console.log(data)
       })

    }

    borrarPost(id){
        post_services.BorrarPost(id).then(data => {
            console.log(data)
        })
    }
}

const logued_user_functions = new LoguedUserFunctions()
export default logued_user_functions