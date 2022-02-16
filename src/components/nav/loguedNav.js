import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'

// services
import user_services from '../../services/User'

// context
import { AuthContext } from '../../context/authContext'

export default function LoguedNav () {

    const authContext = useContext(AuthContext)
    const [users,setUsers] = useState([])
    const [results,setResults] = useState([])

    const username = authContext.loguedUser.username

    useEffect(() => {
        user_services.ObtenerUsuarios().then(data => {
            setUsers(data)
        })
    },[])
    
    const buscador = search => {
        if(search.length > 1){
            const users_results = users.filter(username => username.toLowerCase().includes(search.toLowerCase()))
            if(users_results.length > 0) setResults(users_results)
            else setResults([])
        }else{
            setResults([])
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href={'/'+username}>{username}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Nuevo post</a>
              </li>
            </ul>
            <ul className="navbar-nav ">
                {results}
            </ul>
            <form className="mx-auto">
              <input onChange={e => buscador(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link" href="#">Salir</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
