import React from 'react'
import {Route, Routes} from 'react-router-dom';
import StudentDashboard from './StudentDashboard';

import StudentNav from './StudentNav';
// import Student from './Student';
import StudentProposals from './StudentProposals';

function Students() {
  return (
    <div>
        <StudentNav />
        <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/students/proposals" element={<StudentProposals />} />
        <Route path="/students/payments" element={<StudentProposals />} />
            {/* <Route path="/" element={<MainPage />} />
            <Route path='/create-account' element={<SignUp/>} />
            <Route path='/student-signin' element={<StudentSignIn/>} />
            <Route path='/tutor-signin' element={<TutorSignIn/>} />
            <Route path='/admin-signin' element={<AdminSignIn/>} /> */}
        </Routes>
    </div>
  )
}

export default Students