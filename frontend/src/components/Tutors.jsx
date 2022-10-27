import React from 'react';
import {Route, Routes} from 'react-router-dom';

import TutorNav from './TutorNav';
import TutorDashboard from './TutorDashboard';
import StudentProposals from './StudentProposals';
import TutorPayments from './TutorPayments';

function Tutors() {
  return (
    <div>
        <TutorNav />
        <Routes>
          <Route path="/" element={<TutorDashboard />} />
          {/* <Route path="/tutors/proposals" element={<StudentProposals />} /> */}
          <Route path="/payments" element={<TutorPayments />} />
        </Routes>
    </div>
  )
}

export default Tutors;