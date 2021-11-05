import axios from 'axios'
import SERVER from '../constant/server'
const api = axios.create({
    baseURL: `${SERVER.BASE_URL}/quiz`,
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 
export const getCategoryQuiz = (category) => api.get(`/category/${category}`)
export const getQuiz = (quizId) => api.get(`/${quizId}`)
export const getQuizzes = () =>api.get('/quizManagement')
const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz,
    getQuiz,
    getQuizzes
}

export default quizApis