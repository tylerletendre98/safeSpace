import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import WelcomePage from './pages/welcomePage/WelcomePage';
function App() {
  return (
    <div className="App">
      <div className='header-container-app'>
          <Header/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<WelcomePage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
