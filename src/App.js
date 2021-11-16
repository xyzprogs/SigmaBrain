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
import QuizEditingPage from './pages/QuizEditingPage/quizEditingPage';
import ForumPage from './pages/ForumPage/forumPage';
import { Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context'
import bootstrap from 'bootstrap' 
import NavBar from './components/NavBar';
import ChannelLeaderboardPage from './pages/ChannelLeaderboardPage';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <div className = "navbarHeader">
          <NavBar/>
        </div>

        <div className = "mainPageContainer">
        <Switch>
          <Route exact path='/' component = {HomePage}/>
          <Route path='/login' component = {LoginPage}/>
          <Route path='/register' component = {RegisterPage}/>
          <Route path='/profile/:userId' component = {UserProfilePage}/>
          <Route path='/quizTaking/:quizId' component = {QuizTakingPage}/>
          <Route path='/quizCreation' component = {QuizCreationPage}/>
          <Route path='/quizDescription/:quizId' component = {QuizDescriptionPage}/>
          <Route path='/quizManagement' component={QuizManagementPage}/>
          <Route path='/searchResult' component = {SearchResultPage}/>
          <Route path='/quizEditing/:quizId' component = {QuizEditingPage}/>
          <Route path='/forum' component = {ForumPage}/>
          <Route path='/leaderboard/:leaderboardId' component = {ChannelLeaderboardPage}/>
        </Switch>
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
