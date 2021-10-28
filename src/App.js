import './App.css';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import HomePage from './pages/HomePage/homePage';
import UserProfilePage from './pages/UserProfilePage/userProfilePage';
import QuizTakingPage from './pages/QuizTakingPage/quizTakingPage';
import QuizCreationPage from './pages/QuizCreationPage/quizCreationPage';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';



function App() {
  let history = useHistory()


  return (
    <div className="App">
      {/* <button onClick = {()=> {history.push('/login')}}>Go to Login Page</button> */}
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route path='/login' component = {LoginPage}/>
        <Route path='/register' component = {RegisterPage}/>
        <Route path='/profile' component = {UserProfilePage}/>
        <Route path='/quizTaking' component = {QuizTakingPage}/>
        <Route path='/quizCreation' component = {QuizCreationPage}/>
      </Switch>
    </div>
  );
}

export default App;
