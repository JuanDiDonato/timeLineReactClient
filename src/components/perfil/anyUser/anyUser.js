import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

// pantalla de carga
import LoadScreen from '../../loadScreen/loadScreen';

// servicios
import perfil_services from '../../../services/Perfil';
import user_services from '../../../services/User';

const AnyUser = () => {
  const {username} = useParams()

  //eslint-disable-next-line
  const [user,setUser] = useState({'username':'','description':'','photo':''}) 
  const [friends,setFriends] = useState()
  const [posts,setPosts] = useState()

  useEffect(() => {
    perfil_services.Perfil(username).then(data => {
      if(data.error === false){
        user.username = data.perfil.username
        user.description = data.perfil.description
        user.photo = data.perfil.photo
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
      }
    })
  }, [user,username])


  const follow = () => {
    user_services.Seguir(username).then(data => {
      if(data.error === true) alert(data.message)
    })
  }

  if(friends && posts){
    return (
        <div>
          <h2>perfil de {user.username}</h2>
          <h3>{user.description}</h3>
          <h3>{user.photo}</h3>
          <div>
          <button onClick={() => follow()}>seguir</button>
          </div>        
          <h2>Mis amigos</h2>
          {friends.map(friend => {
            return(
              <div key={friends.indexOf(friend)}>
                <h4>{friend}</h4>
              </div>
            )
          })}
          <h2>Mis posts</h2>
          {posts.map(post => {
            return(
              <div key={posts.indexOf(post)}>
                <h1>{post.title}</h1>
                <h3>{post.comment}</h3>
                <h6>{post.createdAt}</h6>
              </div>
            )
          })}
        </div>
      )
  }else{
      return(
          <LoadScreen/>
      )
  }
}


export default AnyUser