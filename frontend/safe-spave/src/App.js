import './App.css';
import {Routes,Route} from 'react-router-dom'
import WelcomePage from './pages/welcomePage/WelcomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import { useState } from 'react';
import axios from 'axios';
import data from './data/backgroundImage';
function App() {

  const [loggingIn,setLoggingIn] = useState(false);
  const [creatingNewAccount, setCreatingNewAccount] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState()
  const [errorMessage, setErrorMessage] =useState()

  const newUser=(newInfo)=>{
    axios.post(`http://localhost:5000/api/users/newUser`,newInfo)
    .then((res)=>{
      setLoggedInUser(res.data)
    })
  }

  const login = (loginInfo)=>{
      axios.post(`http://localhost:5000/api/users/login`, loginInfo)
      .then((res)=>{
        // console.log(res.data)
        setLoggedInUser(res.data)
      })
      .catch((err)=>{
        setErrorMessage(err.response.data)
      })
  }

  return (
    <div className="App">
      <div className="background-image">
          <img src={data.url} alt="" height="100vh" />
        </div>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
          <Route path='/loginPage' element={<LoginPage loggingIn={loggingIn} setLoggingIn={setLoggingIn} 
                                                        creatingNewAccount={creatingNewAccount} 
                                                        login={login}
                                                        setCreatingNewAccount={setCreatingNewAccount}
                                                        newUser={newUser}
                                                        
          />}/>
          <Route path='/profilePage' element={<ProfilePage loggedInUser={loggedInUser} errorMessage={errorMessage} setLoggedInUser={setLoggedInUser}/>}/>
        </Routes>
    </div>
  );
}

export default App;
