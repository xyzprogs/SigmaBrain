import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api/quiz',
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 
export const getCategoryQuiz = (category) => api.get(`/category/${category}`)
export const getQuiz = (quizId) => api.get(`/${quizId}`)
const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz,
    getQuiz
}

export default quizApis