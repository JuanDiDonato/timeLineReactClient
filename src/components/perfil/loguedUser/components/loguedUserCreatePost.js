import React from 'react'

import logued_user_functions from '../functions';

export default function LoguedUserCreatePost(post,setPost,setPosts,loguedUsername) {

    const onChangePost = e =>{
        setPost({...post,[e.target.name] : e.target.value});
    }

    const upFilesPost = e =>{
        setPost({...post,files : e});
    }

    const savePost = async () => {
        const formData = new FormData()
        formData.append('title', post.title)
        formData.append('comment', post.comment)
        formData.append('files', post.files[0])
        logued_user_functions.crearPost(formData)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if(data) setPosts(data.posts)
    }

  return (
    <div>
        <input onChange={onChangePost} type="text" placeholder='title' name='title' />
        <textarea onChange={onChangePost} placeholder='comment' name='comment' cols="30" rows="10"></textarea>
        <input onChange={e=>upFilesPost(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
        <button onClick={() => savePost()}>guardar</button>
    </div>
  )
}
