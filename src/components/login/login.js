import React from 'react'
import {useNavigate} from 'react-router-dom'

import auth_services from '../../services/Authenticate';

export default function Login() {

    let history = useNavigate()

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;
    
        auth_services.Login(user).then(data => {
            console.log(data)
            if(data === 'Unauthorized') alert('Usuario o contraseña incorrectos')
            else{
                alert(data.message);
                history('/'+data.user.username);
            }
        })
    } 

  return (
    <div>
        <h1> timeLineClient</h1>
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
                    <button type="submit" >Continuar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
