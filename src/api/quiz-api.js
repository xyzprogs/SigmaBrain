import axios from 'axios'
import config from '../config'
const api = axios.create({
    baseURL: `${config.base_url}/quiz`,
})


export const getMostPopularQuiz = () => api.get('/popular/topquiz') 
export const getQuizThumbnail = (quizId) => api.get('/thumbnail/' + quizId) 
export const getCategoryQuiz = (category) => api.get(`/category/${category}`)
export const getQuiz = (quizId) => api.get(`/${quizId}`)
export const getQuestion = (quizId) => api.get(`/${quizId}/quizQuestion`)
export const getQuestionChoice = (questionId) => api.get(`/quizQuestionChoice/${questionId}`)
export const createQuiz = (quiz, headers) => api.post("/", quiz, {headers: headers})
export const setQuizThumbnail = (quizId, formData, headers) => api.post(`/quizThumbnail/${quizId}`, formData, {headers: headers})
export const getUserQuiz = (userId) => api.get(`/user/${userId}`)
export const createQuizWithQuestions = (quiz, headers) => api.post("/quizWithQuestions", quiz, {headers: headers})
export const createQuizGrade = (payload, headers) => api.post('/createQuizGrade', payload, {headers: headers})
export const deleteQuizWithQuestions = (quizId, headers) => api.delete(`/quizWithQuestions/${quizId}`, {headers: headers})
export const getUserTopFeatureQuiz = (userId) => api.get(`/userTopFeatureQuiz/${userId}`)
export const setUserTopFeatureQuiz = (payload, headers) => api.post('/userTopFeatureQuiz', payload, {headers: headers})
export const updateQuiz = (payload, headers)=> api.post('/updateQuiz', payload, {headers: headers})
export const getChoicesInAQuestion = (questionId) => api.get(`/choicesInAQuestion/${questionId}`)
export const getChoicesInAQuestionWithAnswer = (questionId, headers) => api.get(`/choicesInAQuestionWithAnswer/${questionId}`, {headers: headers})
export const getQuestions = (quizId) => api.get(`/${quizId}/quizQuestion`)
export const updateQuestionChoice = (payload, headers) => api.post('/updateQuestionChoices', payload, {headers: headers})
export const getTopQuizByCategory = (category) => api.get(`/getTopQuizByCategory/${category}`)
export const postQuizComment = (payload, headers) => api.post('/quizComment', payload, {headers:headers})
export const getQuizComments = (quizId) => api.get(`/quizComment/${quizId}`)
export const getQuizNameSearchResult = (search) => api.get(`/search/${search}`)
export const getQuizSearchResult = (search) => api.get(`/searchQuiz/${search}`)

const quizApis = {
    getMostPopularQuiz,
    getQuizThumbnail,
    getCategoryQuiz,
    getQuiz,
    getQuestion,
    getQuestionChoice,
    getUserQuiz,
    createQuiz,
    createQuizGrade,
    setQuizThumbnail,
    createQuizWithQuestions,
    deleteQuizWithQuestions,
    getUserTopFeatureQuiz,
    setUserTopFeatureQuiz,
    updateQuiz,
    getQuestions,
    getChoicesInAQuestion,
    getChoicesInAQuestionWithAnswer,
    updateQuestionChoice,
    getTopQuizByCategory,
    postQuizComment,
    getQuizComments,
    getQuizNameSearchResult,
    getQuizSearchResult
}

export default quizApis