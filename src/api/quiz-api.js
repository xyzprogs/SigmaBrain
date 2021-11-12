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
export const createQuizWithQuestions = (quiz, headers) => api.post("/quizWithQuestions", quiz, {headers: headers})
export const deleteQuizWithQuestions = (quizId, headers) => api.delete(`/quizWithQuestions/${quizId}`, {headers: headers})
export const getUserTopFeatureQuiz = (userId) => api.get(`/userTopFeatureQuiz/${userId}`)
export const setUserTopFeatureQuiz = (payload, headers) => api.post('/userTopFeatureQuiz', payload, {headers: headers})
export const updateQuiz = (payload, headers)=> api.post('/updateQuiz', payload, {headers: headers})
const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz,
    getQuiz,
    getUserQuiz,
    createQuiz,
    setQuizThumbnail,
    createQuizWithQuestions,
    deleteQuizWithQuestions,
    getUserTopFeatureQuiz,
    setUserTopFeatureQuiz,
    updateQuiz
}

export default quizApis