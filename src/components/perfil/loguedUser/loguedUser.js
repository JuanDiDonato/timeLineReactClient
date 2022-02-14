import React, {useEffect, useState, useContext} from 'react'

// pantalla de carga
import LoadScreen from '../../loadScreen/loadScreen';

// servicios
import perfil_services from '../../../services/Perfil';

// contexto
import {AuthContext} from '../../../context/authContext'

// metodos
import logued_user_functions from './functions';

const LoguedUser = () => {
  const authContext = useContext(AuthContext)

  //eslint-disable-next-line
  const [user,setUser] = useState({'username':'','description':'','photo':''}) 
  const [friends,setFriends] = useState()
  const [posts,setPosts] = useState()
  const [editMode, setEditMode] = useState(false)
  const [postMode, setPostMode] = useState(false)
  const [perfil,setPerfil] = useState({'description': '', files : []})
  const [post,setPost] = useState({'title': '','comment': '', files : []})

  useEffect(() => {
    perfil_services.Perfil(authContext.loguedUser.username).then(data => {
      if(data.error === false){
        user.username = data.perfil.username
        user.description = data.perfil.description
        user.photo = data.perfil.photo
        setFriends(data.perfil.friends)
        setPosts(data.perfil.posts)
      }
    })
  }, [user])

  // funciones para subir posts
  const changePostMode = () => {
    if(postMode) setPostMode(false)
    else setPostMode(true)
  }
  const onChangePost = e =>{
    setPost({...post,[e.target.name] : e.target.value});
  }
  const upFilesPost = e =>{
    setPost({...post,files : e});
  }
  const savePost = () => {
    const formData = new FormData()
    formData.append('title', post.title)
    formData.append('comment', post.comment)
    formData.append('files', post.files[0])
    logued_user_functions.crearPost(formData)
  }

  // funciones para editar perfil
  const changeMode = () => {
    if(editMode) setEditMode(false)
    else setEditMode(true)
  }
  const onChange = e =>{
    setPerfil({...perfil,[e.target.name] : e.target.value});
  }
  const upImage = e =>{
    setPerfil({...perfil,files : e});
  }
  const savePerfil = () => {
    const formData = new FormData()
    formData.append('description', perfil.description)
    formData.append('files', perfil.files[0])
    logued_user_functions.editarPerfil(formData)
  }

  if(friends && posts){
    return (
      <div>
        <h2>perfil de {user.username}</h2>
        <h3>{user.description}</h3>
        <h3>{user.photo}</h3>
        <div>
            <button onClick={() => changeMode()}>editar perfil</button>
        </div>
        {editMode ?
          <div>
            <textarea onChange={onChange} placeholder='description' name='description' cols="30" rows="10"></textarea>
            <input onChange={e=>upImage(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
            <button onClick={() => savePerfil()}>guardar</button>
          </div>
        : null}
        <h2>Mis amigos</h2>
        {friends.map(friend => {
          return(
            <div key={friends.indexOf(friend)}>
              <h4>{friend}</h4>
            </div>
          )
        })}
        <h2>Mis posts</h2>
        <button onClick={() => changePostMode()}>crear nuevo post</button>

        {postMode ?
          <div>
            <input onChange={onChangePost} type="text" placeholder='title' name='title' />
            <textarea onChange={onChangePost} placeholder='comment' name='comment' cols="30" rows="10"></textarea>
            <input onChange={e=>upFilesPost(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
            <button onClick={() => savePost()}>guardar</button>
          </div>
        : null}

        {posts.map(post => {
          return(
            <div key={posts.indexOf(post)}>
              <h1>{post.title}</h1>
              <h3>{post.comment}</h3>
              <h3>{post.file}</h3>
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


export default LoguedUser
