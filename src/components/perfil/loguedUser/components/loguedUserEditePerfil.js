import React from 'react'

import logued_user_functions from '../functions'

export default function loguedUserEditePerfil(perfil, setPerfil) {

    const onChange = e => {
        setPerfil({ ...perfil, [e.target.name]: e.target.value });
    }
    const upImage = e => {
        setPerfil({ ...perfil, files: e });
    }
    const savePerfil = () => {
        const formData = new FormData()
        formData.append('description', perfil.description)
        formData.append('files', perfil.files[0])
        logued_user_functions.editarPerfil(formData)
    }

    return (
        <div>

            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#editar_p">
                Editar perfil
            </button>

            <div className="modal fade" id="editar_p" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar perfil</h5>
                        </div>
                        <div class="modal-body">
                            <textarea className='form-control m-1' onChange={onChange} placeholder='Descripcion del perfil' name='description' cols="10" rows="5"></textarea>
                            <input className='form-control m-1' onChange={e => upImage(e.target.files)} type="file" name='files' placeholder='Foto de perfil' />
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => savePerfil()}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
