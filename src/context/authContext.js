import React, {createContext,useState,useEffect} from 'react';

// servicios
import auth_services from '../services/Authenticate';


export const AuthContext = createContext();
// eslint-disable-next-line 
export default ({ children })=>{
    const [loguedUser,setLoguedUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        auth_services.Authenticate().then(data => {
            setLoguedUser(data)
            setIsAuthenticated(data.isAuth)
            setIsLoaded(true)
        })
    },[]);

    return (
        <div>
            {!isLoaded ? <h1>Cargando Aplicacion...</h1> : 
            <AuthContext.Provider value={{loguedUser,setLoguedUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}