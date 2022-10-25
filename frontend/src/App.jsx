import './styles/App.css';

import SignUp from './components/SignUp';
import StudentSignIn from './components/StudentSignIn';
import Nav from './components/Nav';
import MainPage from './components/MainPage';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
        <MainPage />
        <Routes>
            <Route path='/create-account' element={<SignUp/>} />
            <Route path='/new2' element={<StudentSignIn/>} />
        </Routes>
    </>
  )
}

export default App
