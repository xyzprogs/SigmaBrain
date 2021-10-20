import './App.css';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import HomePage from './pages/HomePage/homePage';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';



function App() {
  let history = useHistory()


  return (
    <div className="App">
      <button onClick = {()=> {history.push('/login')}}>Go to Login Page</button>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route path='/login' component = {LoginPage}/>
        <Route path='/register' component = {RegisterPage}/>
      </Switch>
    </div>
  );
}

export default App;
