import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';

// contexto
import {AuthContext} from '../../context/authContext'

// perfil de usuario logueado
import LoguedUser from './loguedUser/loguedUser';
import AnyUser from './anyUser/anyUser';


const Perfil = () => {
  const {username} = useParams()
  const authContext = useContext(AuthContext)

  if(username === authContext.loguedUser.username) return( <LoguedUser/>)
  else return( <AnyUser/>)
  
}

export default Perfil
