import React from 'react'
import logued_user_functions from '../functions'

export default function LoguedUserPosts(posts,setPosts,loguedUsername) {

    const deletePost = async (id) => {
        logued_user_functions.borrarPost(id)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if(data) setPosts(data.posts)
        
    }
    const editPost = async (id) => {
        const title = document.getElementById('title').value()
        const comment = document.getElementById('comment').value()
        const new_post = {title, comment}
        logued_user_functions.editarPost(id,new_post)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if(data) setPosts(data.posts)
    }

  return (
    <div>
        {posts.map(post => {
            return(
                <div key={posts.indexOf(post)}>
                    <h1>{post.title}</h1>
                    <h3>{post.comment}</h3>
                    <h3>{post.file}</h3>
                    <h6>{post.createdAt}</h6>
                    <button onClick={() => deletePost(post._id)} >borrar post</button>
                    <button onClick={() => editPost(post._id)}>ediar post</button>
                    
                    <div>
                        <input type="text" id='title' placeholder='new title' />
                        <input type="text" id='comment' placeholder='new comment' />
                    </div>
                </div>
            )
        })}
    </div>
  )
}
