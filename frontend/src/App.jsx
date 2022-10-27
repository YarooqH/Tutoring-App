import {Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import './styles/App.css';


import SignUp from './components/SignUp';
import StudentSignIn from './components/StudentSignIn';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import Auth from './components/Auth';
import Students from './components/Students';
import Tutors from './components/Tutors';
import Admins from './components/Admins';
import StudentDashboard from './components/StudentDashboard';
import StudentProposals from './components/StudentProposals';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Auth /> */}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="*" element={<Auth />} />
          <Route path="/students/*" element={<Students />} />
          <Route path="/tutors/*" element={<Tutors />} />
          <Route path="/admin/*" element={<Admins />} />

          {/* <Route path="/students-proposals" element={<StudentProposals />} /> */}
        </Routes>
      </QueryClientProvider>
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
