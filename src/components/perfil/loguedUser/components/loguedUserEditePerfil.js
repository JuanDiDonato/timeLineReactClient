import React from 'react'

import logued_user_functions from '../functions'

export default function loguedUserEditePerfil(perfil,setPerfil) {

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

  return (
    <div>
        <textarea onChange={onChange} placeholder='description' name='description' cols="30" rows="10"></textarea>
        <input onChange={e=>upImage(e.target.files)} type="file" name='files' placeholder='foto de perfil' />
        <button onClick={() => savePerfil()}>guardar</button>
    </div>
  )
}
