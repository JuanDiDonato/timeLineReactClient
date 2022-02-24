import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import perfil_services from '../../../services/Perfil';
import { AuthContext } from '../../../context/authContext';
import PerfilHeader from '../perfilHeader';
import AnyUserPosts from './components/anyUserPosts';

const AnyUser = () => {

  const [user, setUser] = useState({ 'username': '', 'description': '', 'photo': '' })
  const [friends, setFriends] = useState()
  const [posts, setPosts] = useState()
  const [isFriend, setIsFriend] = useState(false)

  const authContext = useContext(AuthContext)
  const loguedUsername = authContext.loguedUser.username
  const { username } = useParams()

  useEffect(() => {
    perfil_services.Perfil(username).then(data => {
      if (data.error === false) {
        if (data.perfil.friends.indexOf(loguedUsername) !== -1) setIsFriend(true)
        setUser({
          'username': data.perfil.username,
          'fullname': data.perfil.fullname,
          'description': data.perfil.description,
          'photo': data.perfil.photo
        })
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
      }
    })
  }, [username])

  if (friends) {
    return (
      <div>
        <div>
          {PerfilHeader(user, friends, loguedUsername, isFriend, setIsFriend)}
        </div>
        <div className='container'>
          {AnyUserPosts(posts)}
        </div>

      </div>
    )
  }else{
    return(
      <div></div>)
  }
}


export default AnyUser
