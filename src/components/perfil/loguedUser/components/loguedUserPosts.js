import React from 'react'
import logued_user_functions from '../functions'

export default function LoguedUserPosts(posts, setPosts, loguedUsername) {

    const deletePost = async (id) => {
        logued_user_functions.borrarPost(id)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if(data) setPosts(data.posts)

    }
    const editPost = async (id) => {
        const title = document.getElementById('title').value
        const comment = document.getElementById('comment').value
        const new_post = { title, comment }
        console.log(new_post)
        logued_user_functions.editarPost(id, new_post)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if (data) setPosts(data.posts)
    }

    return (
        <div className='container'>
            {posts.map(post => {
                return (
                    <div className='card col-md-6 p-3' key={posts.indexOf(post)}>
                        <div className='card-header'>
                            {post.title}
                        </div>
                        <div className='card-body'>
                            <h5>{post.comment}</h5>
                            <h6>{post.createdAt}</h6><img className='img-fluid' src={'http://localhost:5000/files/' + post.file[0]} alt='test' />
                        </div>

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
