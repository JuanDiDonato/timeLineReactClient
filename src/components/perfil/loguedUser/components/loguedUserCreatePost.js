import React from 'react'
import Aos from 'aos';
import logued_user_functions from '../functions';
Aos.init()
export default function LoguedUserCreatePost(post, setPost, setPosts, create, setCreate, loguedUsername) {

    const createMode = () => {
        if (!create) setCreate(true)
        else setCreate(false)
    }

    const onChangePost = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const upFilesPost = e => {
        setPost({ ...post, files: e });
    }
    const savePost = async () => {
        const formData = new FormData()
        formData.append('title', post.title)
        formData.append('comment', post.comment)
        formData.append('files', post.files[0])
        const data = await logued_user_functions.crearPost(formData)
        if (data && data.error === false) {
            const data = await logued_user_functions.obtenerPosts(loguedUsername)
            if (data) setPosts(data.posts)
        }
    }

    return (
        <div className='edit'>
            <div>
                <button onClick={() => createMode()}>Añadir post</button>
            </div>
            {create ?
                <div className='edit-mode' data-aos="fade-down">
                    <input className='form-control m-1' onChange={onChangePost} type="text" placeholder='title' name='title' />
                    <textarea className='form-control m-1' onChange={onChangePost} placeholder='comment' name='comment' cols="30" rows="10"></textarea>
                    <input className='form-control m-1' onChange={e => upFilesPost(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
                    <button type="button" className="btn btn-primary" onClick={() => savePost()}>Actualizar</button>
                </div>
            : null }
        </div>

    )
}
