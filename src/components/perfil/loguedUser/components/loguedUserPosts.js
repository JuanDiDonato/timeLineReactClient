import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import logued_user_functions from '../functions'

export default function LoguedUserPosts(posts, setPosts, loguedUsername) {

    const deletePost = async (id) => {
        logued_user_functions.borrarPost(id)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if (data) setPosts(data.posts)

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
    if (posts.length > 0) {
        return (
            <div>
                {posts.map(post => {
                    return (
                        <div className='post' key={posts.indexOf(post)}>
                            <div className='title'>
                                {post.title}
                            </div>
                            <div>
                                <img src={'http://localhost:5000/files/' + post.file[0]} alt='test' />
                            </div>
                            <div className='comment'>
                                <h6>{moment(post.createdAt).fromNow()}</h6>
                                <h4>{post.comment}</h4>
                            </div>
                            <div>
                                <button onClick={() => deletePost(post._id)} >X</button>
                                {/* <button onClick={() => editPost(post._id)}>/</button> */}
                            </div>

                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className='message'>
                <h3>El usuario no tiene ninguna publicacion</h3>
            </div>
        )
    }

}
