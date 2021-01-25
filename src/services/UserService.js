import http from '../http-common'

//get from server
const getAllUsers=()=>{
    return http.get("/getAllUsers")
}

//send to server
const create=userData=>{
    return http.post("/save",userData)
}

//fetch from server
const getUserById=id=>{
    return http.get(`/users/${id}`)
}

//send to server
const update=(id,userData)=>{
    return http.put(`/users/${id}`,userData)
}

export default {
    getAllUsers,
    create,
    getUserById,
    update
}