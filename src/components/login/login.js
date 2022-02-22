import React,{useContext} from 'react'
import Aos from 'aos';
import auth_services from '../../services/Authenticate';
import {AuthContext} from '../../context/authContext'

export default function Login(props) {
    Aos.init()

    const authContext = useContext(AuthContext)

    const onSubmit = e => {
        e.preventDefault();
        const user = {}
        user['username'] = document.getElementById('username').value;
        user['password'] = document.getElementById('password').value;
    
        auth_services.Login(user).then(data => {
            if(data === 'Unauthorized') alert('Usuario o contraseña incorrectos')
            else{
                alert(data.message);
                authContext.setLoguedUser(data.user)
                props.history.push('/'+data.user.username);
            }
        })
    } 

  return (
    <div className='container mx-auto text-center mt-5 col-md-8'>
        <div className='card p-5' data-aos="fade-up">
            <form onSubmit={onSubmit}>
                <div className='m-2'>
                    <label className='form-label' >Nombre de usuario</label>
                    <input className='form-control' type="text" id="username" placeholder='username' />
                </div>
                <div className='m-2'>
                    <label className='form-label'> Contraseña </label>
                    <input className='form-control' type="password"  id="password" placeholder='password'/>
                </div>
                <div className='m-2'>
                    <button className='btn btn-primary mt-5' type="submit" >Continuar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
