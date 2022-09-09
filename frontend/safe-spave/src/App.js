import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import WelcomePage from './pages/welcomePage/WelcomePage';
import LoginPage from './pages/loginPage/LoginPage';
import { useState } from 'react';
function App() {

  const [loggingIn,setLoggingIn] = useState(false);
  const [creatingNewAccount, setCreatingNewAccount] = useState(false)

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
                                                        setCreatingNewAccount={setCreatingNewAccount}
          />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
