import React from 'react'

// services
import auth_services from '../../services/Authenticate'

const Register = props => {

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;

        auth_services.Register(user).then(data => {
            alert(data.message)
            if(data.error === false){
                props.history.push('/')
            }
        })
    } 

    return (
        <div className='container mx-auto text-center mt-5 col-md-8'>
            <div className='card p-5'>
                <form onSubmit={onSubmit}>
                    <div className='m-2'>
                        <label className='form-label'> Ingrese un nombre de usuario</label>
                        <input className='form-control' type="text" placeholder="username" id="username" />
                    </div>
                    <div className='m-2'>
                        <label className='form-label'> Ingrese su nueva contraseña</label>
                        <input className='form-control' type="password" placeholder="password" id="password" />
                    </div>
                    <div className='m-2'>
                        <button className='btn btn-primary mt-5' type="submit" >Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
    }

export default Register
