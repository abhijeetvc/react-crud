import http from '../http-common'

const getAllUsers=()=>{
    return http.get("/getAllUsers")
}

const create=userData=>{
    return http.post("/users",userData)
}

export default {
    getAllUsers,
    create
}