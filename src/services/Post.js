// servicios para el usuario

import axios from "axios"

class PostServices{

    async ObtenerPosts(username){
        const {data} = await axios.get(`/posts/posts/${username}`,{validateStatus:false})
        return data
    }

    async CrearPost(post){
        const {data} = await axios.post(`/posts/post`,post,{validateStatus:false})
        return data
    }

    async EditarPost(id,post){
        const {data} = await axios.put(`/posts/post/${id}`,post,{validateStatus:false})
        return data
    }

    async BorrarPost(id){
        const {data} = await axios.delete(`/posts/post/${id}`,{validateStatus:false})
        return data
    }
}

const post_services = new PostServices()
export default post_services
