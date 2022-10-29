import React from 'react'
import {Route, Routes} from 'react-router-dom';
import StudentDashboard from './StudentDashboard';

import StudentNav from './StudentNav';
// import Student from './Student';
import StudentProposals from './StudentProposals';
import StudentPayments from './StudentPayments';
import StudentPosts from './StudentPosts';

function Students() {
  return (
    <div>
        <StudentNav />
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/proposals" element={<StudentProposals />} />
          <Route path="/payments" element={<StudentPayments />} />
          <Route path="/posts" element={<StudentPosts />} />
        </Routes>
    </div>
  )
}

export default Students