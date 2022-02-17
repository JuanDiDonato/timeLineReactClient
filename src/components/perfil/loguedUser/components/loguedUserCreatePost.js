import React from 'react'

import logued_user_functions from '../functions';

export default function LoguedUserCreatePost(post, setPost, setPosts, loguedUsername) {

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
        logued_user_functions.crearPost(formData)
        const data = await logued_user_functions.obtenerPosts(loguedUsername)
        if (data) setPosts(data.posts)
    }

    return (
        <div>
            <div>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#crear_p">
                    Crear post
                </button>

                <div className="modal fade" id="crear_p" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Añadir a la linea de tiempo</h5>
                            </div>
                            <div class="modal-body">
                                <input className='form-control m-1' onChange={onChangePost} type="text" placeholder='title' name='title' />
                                <textarea className='form-control m-1' onChange={onChangePost} placeholder='comment' name='comment' cols="30" rows="10"></textarea>
                                <input className='form-control m-1' onChange={e => upFilesPost(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => savePost()}>Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
