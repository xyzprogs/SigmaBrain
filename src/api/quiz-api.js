import axios from 'axios'
import config from '../config'
const api = axios.create({
    baseURL: `${config.base_url}/quiz`,
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 
export const getCategoryQuiz = (category) => api.get(`/category/${category}`)
export const getQuiz = (quizId) => api.get(`/${quizId}`)
export const createQuiz = (quiz, headers) => api.post("/", quiz, {headers: headers})
export const setQuizThumbnail = (quizId, formData, headers) => api.post(`/quizThumbnail/${quizId}`, formData, {headers: headers})
export const getUserQuiz = (userId) => api.get(`/user/${userId}`)
const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz,
    getQuiz,
    getUserQuiz,
    createQuiz,
    setQuizThumbnail
}

export default quizApis