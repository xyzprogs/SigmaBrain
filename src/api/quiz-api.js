import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api/quiz',
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 

const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail
}

export default quizApis