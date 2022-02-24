import React, { useContext } from 'react'
import auth_services from '../../services/Authenticate';
import { AuthContext } from '../../context/authContext'
import './login.css'

export default function Login(props) {

    const authContext = useContext(AuthContext)

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;

        auth_services.Login(user).then(data => {
            if (data === 'Unauthorized') alert('Usuario o contraseña incorrectos')
            else {
                alert(data.message);
                authContext.setLoguedUser(data.user)
                props.history.push('/' + data.user.username);
            }
        })
    }

    return (
            <div className='login'>
                <form onSubmit={onSubmit}>
                    <div id='i-user'>
                        <input  type="text" id="username" placeholder='username' />
                    </div>
                    <div id='i-pass'>
                        <input type="password" id="password" placeholder='password' />
                    </div>
                    <div>
                        <button type="submit" >Continuar</button>
                    </div>
                </form>
            </div>
    )
}
