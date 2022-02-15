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
    <div>
        <ul>
            <li>TimeLineClient</li>
            <li>{username}</li>
            <li>
                <input onChange={e=>buscador(e.target.value)} type="text" placeholder='Busca un usuario' />
            </li>
                {results.length > 0 ? 
                results.map(result => {
                    if(result !== username) return(
                        <div key={results.indexOf(result)}>
                            <Link to={`/${result}`}>{result}</Link>
                        </div>
                    )
                })
                : null}
            <li>Mi linea de tiempo</li>
            <li>Agregar evento</li>
            <li>Salir</li>
        </ul>
    </div>
  )
}
