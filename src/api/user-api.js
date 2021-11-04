import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api/user',
})


export const createUser = (payload, config) => api.post('/create', payload, config) 
export const getMainLeaderboard = () => api.get('/leaderboard')

const userApis = {
    createUser,
    getMainLeaderboard
}

export default userApis