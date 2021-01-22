import http from '../http-common'

const getAllUsers=()=>{
    return http.get("/getAllUsers")
}

const create=userData=>{
    return http.post("/save",userData)
}

export default {
    getAllUsers,
    create
}