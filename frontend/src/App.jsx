import {Route, Routes} from 'react-router-dom';

import './styles/App.css';

import SignUp from './components/SignUp';
import StudentSignIn from './components/StudentSignIn';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import Auth from './components/Auth';
import Students from './components/Students'
import StudentDashboard from './components/StudentDashboard';
import StudentProposals from './components/StudentProposals';

function App() {
  return (
    <>
      {/* <Auth /> */}
    <Routes>
      <Route path="*" element={<Auth />} />
      <Route path="/students/" element={<Students />} />
      {/* <Route path="/students-proposals" element={<StudentProposals />} /> */}
    </Routes>
      {/* <Nav /> */}
        {/* <MainPage /> */}
        {/* <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/create-account' element={<SignUp/>} />
            <Route path='/new2' element={<StudentSignIn/>} />
        </Routes> */}
    </>
  )
}

export default App
