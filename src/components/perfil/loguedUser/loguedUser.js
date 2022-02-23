import React, { useEffect, useState, useContext } from 'react'
// pantalla de carga
import LoadScreen from '../../loadScreen/loadScreen';
// servicios
import perfil_services from '../../../services/Perfil';
// contexto
import { AuthContext } from '../../../context/authContext'
// perifl
import loguedUserEditePerfil from './components/loguedUserEditePerfil';
// header
import PerfilHeader from '../perfilHeader';
// posts
import LoguedUserPosts from './components/loguedUserPosts';
import LoguedUserCreatePost from './components/loguedUserCreatePost';

const LoguedUser = () => {

  const authContext = useContext(AuthContext)
  const loguedUsername = authContext.loguedUser.username

  //eslint-disable-next-line
  const [user, setUser] = useState({ 'username': '', 'description': '', 'photo': '' })
  const [friends, setFriends] = useState()
  const [posts, setPosts] = useState()
  const [perfil, setPerfil] = useState({ 'description': '', files: [] })
  const [post, setPost] = useState({ 'title': '', 'comment': '', files: [] })
  const [edit,setEdit] = useState(false)
  const [create,setCreate] = useState(false)

  useEffect(() => {
    perfil_services.Perfil(loguedUsername).then(data => {
      if (data.error === false) {
        user.username = data.perfil.username
        user.description = data.perfil.description
        user.photo = data.perfil.photo
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
      }
    })
  }, [user])

  if (friends && posts) {
    return (
      <div>
        <div >
          {PerfilHeader(user, friends,loguedUsername)}
        </div>

        <div className='options'>
          <div>
            {loguedUserEditePerfil(perfil,setPerfil,setUser,edit,setEdit,loguedUsername)}
          </div>
          <div >
            {LoguedUserCreatePost(post, setPost, setPosts,create,setCreate, loguedUsername)}
          </div>
        </div>

        <div>
          {LoguedUserPosts(posts, setPosts, loguedUsername)}
        </div>

      </div>
    )
  } else {
    return (
      <LoadScreen />
    )
  }
}


export default LoguedUser
