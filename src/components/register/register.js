import React from 'react'
import {useNavigate} from 'react-router-dom'

// services
import auth_services from '../../services/Authenticate'

const Register = props => {
    
    let history = useNavigate()

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;

        auth_services.Register(user).then(data => {
            alert(data.message)
            if(data.error === false){
                history('/login')
            }
        })
    } 

    return (
        <div>
            <h1>Registro</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nombre de usuario / Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div>
                        <label> Contraseña / Password </label>
                        <input type="password"  id="password" />
                    </div>
                    <div>
                        <button type="submit" >Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
    }

export default Register
