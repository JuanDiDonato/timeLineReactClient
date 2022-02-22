import React from 'react'
import Aos from 'aos';
import logued_user_functions from '../functions'
import perfil_services from '../../../../services/Perfil';
Aos.init()

export default function loguedUserEditePerfil(perfil, setPerfil, setUser, edit, setEdit, loguedUsername) {

    const editMode = () => {
        if (!edit) setEdit(true)
        else setEdit(false)
    }

    const onChange = e => {
        setPerfil({ ...perfil, [e.target.name]: e.target.value });
    }
    const upImage = e => {
        setPerfil({ ...perfil, files: e });
    }
    const savePerfil = async () => {
        const formData = new FormData()
        formData.append('description', perfil.description)
        formData.append('files', perfil.files[0])
        const data = await logued_user_functions.editarPerfil(formData)
        if (data && data.error === false) {
            perfil_services.Perfil(loguedUsername).then(data => {
                if (data.error === false) {
                    setUser({ 'username': data.perfil.username, 'description': data.perfil.description, 'photo': data.perfil.photo })
                }
            })
            document.getElementById('desc').value = ''
            document.getElementById('files').value = null
        }
    }

    return (
        <div className='edit'>
            <div>
                <button onClick={() => editMode()}>Editar perfil</button>
            </div>
            {edit ?
                    <div className='edit-mode' data-aos="fade-down">
                        <textarea onChange={onChange} id='desc' placeholder='Descripcion del perfil' name='description' cols="30" rows="5"></textarea>
                        <input onChange={e => upImage(e.target.files)} id='files' type="file" name='files' placeholder='Foto de perfil' />
                        <button type="button" onClick={() => savePerfil()}>Actualizar</button>
                    </div>
                : null}

        </div>
    )
}
