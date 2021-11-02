import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api/quiz',
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 
export const getCategoryQuiz = (category) => api.get(`/category/${category}`)
const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz
}

export default quizApis