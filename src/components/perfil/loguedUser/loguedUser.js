import React, {useEffect, useState, useContext} from 'react'
// pantalla de carga
import LoadScreen from '../../loadScreen/loadScreen';
// servicios
import perfil_services from '../../../services/Perfil';
// contexto
import {AuthContext} from '../../../context/authContext'
// perifl
import loguedUserEditePerfil from './components/loguedUserEditePerfil';
// posts
import LoguedUserPosts from './components/loguedUserPosts';
import LoguedUserCreatePost from './components/loguedUserCreatePost';

const LoguedUser = () => {

  const authContext = useContext(AuthContext)
  const loguedUsername = authContext.loguedUser.username

  //eslint-disable-next-line
  const [user,setUser] = useState({'username':'','description':'','photo':''}) 
  const [friends,setFriends] = useState()
  const [posts,setPosts] = useState()
  const [editMode, setEditMode] = useState(false)
  const [perfil,setPerfil] = useState({'description': '', files : []})
  const [post,setPost] = useState({'title': '','comment': '', files : []})

  useEffect(() => {
    perfil_services.Perfil(loguedUsername).then(data => {
      if(data.error === false){
        user.username = data.perfil.username
        user.description = data.perfil.description
        user.photo = data.perfil.photo
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
      }
    })
  }, [user])

  if(friends && posts){
    return (
      <div>
        <h2>perfil de {user.username}</h2>
        <h3>{user.description}</h3>
        <h3>{user.photo}</h3>

        {loguedUserEditePerfil(perfil,setPerfil)}

        <h2>Mis amigos</h2>
        {friends.map(friend => {
          return(
            <div key={friends.indexOf(friend)}>
              <h4>{friend}</h4>
            </div>
          )
        })}

        <h2>Mis posts</h2>
        {LoguedUserCreatePost(post,setPost,setPosts,loguedUsername)}

        {LoguedUserPosts(posts,setPosts,loguedUsername)}

      </div>
    )
  }else{
    return(
      <LoadScreen/>
    )
  }
}


export default LoguedUser
