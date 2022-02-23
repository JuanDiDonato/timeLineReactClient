import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import user_services from '../../services/User'
import auth_services from '../../services/Authenticate'
import { AuthContext } from '../../context/authContext'

export default function LoguedNav(props) {

  const authContext = useContext(AuthContext)
  const [users, setUsers] = useState([])
  const [results, setResults] = useState([])

  const username = authContext.loguedUser.username

  useEffect(() => {
    user_services.ObtenerUsuarios().then(data => {
      setUsers(data)
    })
  }, [])

  const buscador = search => {
    if (search.length > 1) {
      const users_results = users.filter(username => username.toLowerCase().includes(search.toLowerCase()))
      if (users_results.length > 0) setResults(users_results)
      else setResults([])
    } else {
      setResults([])
    }
  }

  const logout = () => {
    auth_services.Logout()
  }

  if (users) {
    return (
      <div className='main-nav'>
        <nav>
          <div id='user'>
            <Link to={'/' + username}>Mi linea de tiempo</Link>
          </div>
          <div id='buscador'>
            <input onChange={e => buscador(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
          </div>
          <div id='logout'>
            <Link onClick={() => logout()} to="/">Salir</Link>
          </div>
        </nav>

        {results.length > 0 ?
          results.map(result => {
            return (
              <div className='results'>
                <tr key={results.indexOf(result)}>
                  <td><Link to={'/' + result}>{result}</Link></td>
                </tr>
              </div>
            )
          })
          : null}
      </div>

    )
  }
}
