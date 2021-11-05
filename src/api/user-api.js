import axios from 'axios'
import config from '../config'
const api = axios.create({
    baseURL: `${config.base_url}/user`,
})


export const createUser = (payload, config) => api.post('/create', payload, config) 
export const getMainLeaderboard = () => api.get('/leaderboard')

const userApis = {
    createUser,
    getMainLeaderboard
}

export default userApis