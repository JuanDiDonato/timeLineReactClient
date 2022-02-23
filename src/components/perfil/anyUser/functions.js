// funciones de anyUser.js

// servicios
import user_services from '../../../services/User';

class AnyUserFuctions{

    // metodo para seguir o agregar un usuario
    Follow(username){
        console.log(username)
        user_services.Seguir(username).then(data => {
            if(data.error === true) alert(data.message)
        }) 
    }

    // metodo para borrar o dejar de seguir a un usuario
    UnFollow(username){
        user_services.DejarDeSeguir(username).then(data => {
            console.log(data)
        })
    }

}

const any_user_functions = new AnyUserFuctions()
export default any_user_functions