import axios from 'axios'
import SERVER from '../constant/server'
const api = axios.create({
    baseURL: `${SERVER.BASE_URL}/user`,
})


export const createUser = (payload, config) => api.post('/create', payload, config) 
export const getMainLeaderboard = () => api.get('/leaderboard')

const userApis = {
    createUser,
    getMainLeaderboard
}

export default userApis