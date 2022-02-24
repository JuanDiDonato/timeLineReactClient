import React from 'react'

// services
import auth_services from '../../services/Authenticate'

const Register = props => {

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;
        user['fullname'] = document.getElementById('fullname').value;

        auth_services.Register(user).then(data => {
            alert(data.message)
            if (data.error === false) {
                props.history.push('/')
            }
        })
    }

    return (
        <div className='login'>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="username" id="username" />
                </div>
                <div>
                    <input type="text" placeholder="fullname" id="fullname" />
                </div>
                <div>
                    <input type="password" placeholder="password" id="password" />
                </div>
                <div>
                    <button type="submit" >Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default Register
