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
                history('/')
            }
        })
    } 

    return (
        <div className='RegisterIndex'>
            <h1>Registro</h1>
            <div>
                <form className="RegisterForm" onSubmit={onSubmit}>
                    <div>
                        <input type="text" placeholder="Nombre de usuario" id="username" />
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña" id="password" />
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
