import './App.css';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import HomePage from './pages/HomePage/homePage';
import UserProfilePage from './pages/UserProfilePage/userProfilePage';
import QuizTakingPage from './pages/QuizTakingPage/quizTakingPage';
import QuizCreationPage from './pages/QuizCreationPage/quizCreationPage';
import QuizDescriptionPage from './pages/QuizDescriptionPage/quizDescriptionPage';
import QuizManagementPage  from './pages/QuizManagementPage/quizManagementPage';
import SearchResultPage from './pages/SearchResultPage/searchResultPage';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context'
import bootstrap from 'bootstrap' 


function App() {
  let history = useHistory()


  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route exact path='/' component = {HomePage}/>
          <Route path='/login' component = {LoginPage}/>
          <Route path='/register' component = {RegisterPage}/>
          <Route path='/profile' component = {UserProfilePage}/>
          <Route path='/quizTaking' component = {QuizTakingPage}/>
          <Route path='/quizCreation' component = {QuizCreationPage}/>
          <Route path='/quizDescription/:quizId' component = {QuizDescriptionPage}/>
          <Route path='/quizManagement' component={QuizManagementPage}/>
          <Route path='/searchResult' component = {SearchResultPage}/>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
