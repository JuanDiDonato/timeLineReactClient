import React from 'react'
import Aos from 'aos';
import logued_user_functions from '../functions';
Aos.init()

export default function LoguedUserCreatePost(post, setPost,
    setPosts, create,
    setCreate, loguedUsername) {
    const createMode = () => {
        if (!create) {
            setCreate(true)
            document.getElementById('create-mode').classList.add('show')
            document.getElementById('root').classList.add('back')
        } else {
            setCreate(false)
            document.getElementById('create-mode').classList.remove('show')
            document.getElementById('root').classList.remove('back')
        }
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
            if (data) setPosts(data)
        }
        document.getElementById('title').value = ''
        document.getElementById('files').value = ''
        document.getElementById('comment').value = ''
        setCreate(false)
        createMode()
    }

    return (
        <div className='edit' >
            <div className='edit-mode hidden' id='create-mode'>
                <div>
                    <input className='form-control m-1' onChange={e => upFilesPost(e.target.files)} type="file" name='files' id='files' placeholder='foto de perfil' />
                    <input className='form-control m-1' onChange={onChangePost} type="text" placeholder='title' name='title' id='title'/>
                </div>
                <div>
                    <textarea className='form-control m-1' onChange={onChangePost} placeholder='comment' name='comment' id='comment' cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button className='btn' type="button" className="btn btn-primary" onClick={() => savePost()}>Crear</button>
                    <button className='btn' type="button" onClick={
                        () => {
                            setCreate(false)
                            createMode()
                        }}>
                        Cancelar
                    </button>
                </div>
            </div>
            <div>
                <button className='btn' onClick={() => createMode()}>Añadir post</button>
            </div>


        </div>

    )
}
