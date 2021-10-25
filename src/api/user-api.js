import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api/user',
})


export const createUser = (payload, config) => api.post('/create', payload, config) 

const userApis = {
    createUser
}

export default userApis