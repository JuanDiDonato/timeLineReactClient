import React from 'react'
import { Link } from 'react-router-dom'

export default function UnauthorizedNav() {
  return (
    <div className='main-nav unregistered'>
      <nav>
        <div id='user'>
          <h3>
            TimeLine!
          </h3>
        </div>
      <div id='links'>
        <Link to='/'>Acceder</Link>
        <Link to='/register'>Registrate</Link>
      </div>
      </nav>
    </div>
  )
}
