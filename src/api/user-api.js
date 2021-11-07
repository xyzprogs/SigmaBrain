import axios from 'axios'
import config from '../config'
const api = axios.create({
    baseURL: `${config.base_url}/user`,
})


export const createUser = (payload, config) => api.post('/create', payload, config) 
export const getMainLeaderboard = () => api.get('/leaderboard')
export const setProfilePageImage = (formdata, config) => api.post('/profile/setUserProfileImage', formdata, config)
export const setBackgroundImage = (formdata, config) => api.post('/profile/setUserBackgroundImage', formdata, config)
export const setUserDescription = (payload, config) => api.post('/profile/setUserDescription', payload, config)
export const setTopFeatureQuiz = (payload, config) => api.post('/profile/setTopFeatureQuiz', payload, config)
export const getProfileImage = (userId)=>api.get(`/profile/profileImage/${userId}`)
export const getBackgroundImage = (userId)=>api.get(`/profile/backgroundImage/${userId}`)
export const getUserDescription = (userId)=>api.get(`/profile/userDescription/${userId}`)


const userApis = {
    createUser,
    getMainLeaderboard,
    setProfilePageImage,
    setUserDescription,
    setTopFeatureQuiz,
    setBackgroundImage,
    getProfileImage,
    getBackgroundImage,
    getUserDescription
}

export default userApis