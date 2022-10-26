import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav'

import SignUp from './SignUp';
import StudentSignIn from './StudentSignIn';
import TutorSignIn from './TutorSignIn';
import AdminSignIn from './AdminSignIn';
import MainPage from './MainPage';

function Auth() {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/create-account' element={<SignUp/>} />
            <Route path='/student-signin' element={<StudentSignIn/>} />
            <Route path='/tutor-signin' element={<TutorSignIn/>} />
            <Route path='/admin-signin' element={<AdminSignIn/>} />
        </Routes>
    </div>
  )
}

export default Auth