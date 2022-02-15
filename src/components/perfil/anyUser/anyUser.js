import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
// pantalla de carga
import LoadScreen from '../../loadScreen/loadScreen';
// servicios
import perfil_services from '../../../services/Perfil';
import { AuthContext } from '../../../context/authContext';
// follow
import AnyUserFollow from './components/anyUserFollow';
// posts
import AnyUserPosts from './components/anyUserPosts';

const AnyUser = () => {

  const authContext = useContext(AuthContext)
  const {username} = useParams()

  //eslint-disable-next-line
  const [user,setUser] = useState({'username':'','description':'','photo':''}) 
  const [friends,setFriends] = useState()
  const [posts,setPosts] = useState()
  const [isFriend, setIsFriend] = useState()

  useEffect(() => {
    perfil_services.Perfil(username).then(data => {
      if(data.error === false){
        user.username = data.perfil.username
        user.description = data.perfil.description
        user.photo = data.perfil.photo
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
        if(authContext.loguedUser.friends.indexOf(username) === -1) setIsFriend(false)
        else setIsFriend(true)
      }
    })
  }, [user,username])

  if(friends){
    return (
        <div>
          <h2>perfil de {user.username}</h2>
          <h3>{user.description}</h3>
          <h3>{user.photo}</h3>

          {AnyUserFollow(username,isFriend, setIsFriend)}

          <h2>Mis amigos</h2>
          {friends.map(friend => {
            return(
              <div key={friends.indexOf(friend)}>
                <h4>{friend}</h4>
              </div>
            )
          })}

          {AnyUserPosts(posts)}

        </div>
      )
  }else{
      return(
          <LoadScreen/>
      )
  }
}


export default AnyUser
