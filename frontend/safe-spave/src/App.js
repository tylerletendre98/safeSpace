import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import WelcomePage from './pages/welcomePage/WelcomePage';
import LoginPage from './pages/loginPage/LoginPage';
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [loggingIn,setLoggingIn] = useState(false);
  const [creatingNewAccount, setCreatingNewAccount] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState()
  const [errorMessage, setErrorMessage] =useState()

  const newUser=(newInfo)=>{
    axios.post(`http://localhost:5000/api/users/newUser`,newInfo)
    .then((res)=>{
      console.log(res.data)
    })
  }

  const login = (loginInfo)=>{
      axios.post(`http://localhost:5000/api/users/login`, loginInfo)
      .then((res)=>{
        console.log(res.data)
        // setLoggedInUser(res.data)
      })
      .catch((err)=>{
        setErrorMessage(err.response.data)
      })
  }

  return (
    <div className="App">
      <div className='header-container-app'>
          <Header loggingIn={loggingIn} setLoggingIn={setLoggingIn}/>
      </div>
      <div className='body'>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/loginPage' element={<LoginPage loggingIn={loggingIn} setLoggingIn={setLoggingIn} 
                                                        creatingNewAccount={creatingNewAccount} 
                                                        login={login}
                                                        setCreatingNewAccount={setCreatingNewAccount}
                                                        newUser={newUser}
          />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
