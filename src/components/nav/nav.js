import React, {useContext} from 'react'

// context
import { AuthContext } from '../../context/authContext'

// css
import './css/navbar.css'

// navs
import UnauthorizedNav from './unauthorizedNav'
import LoguedNav from './loguedNav'

export default function Nav(props) {

    const authContext = useContext(AuthContext)
    if(!authContext.loguedUser.id || !authContext.loguedUser.username) return( <UnauthorizedNav/> )
    else return( <LoguedNav/> )
    
}
