import React from 'react';
import {Routes, Route} from 'react-router-dom';

import AdminNav from './AdminNav';
import AdminDashboard from './AdminDashboard';
import AdminPayments from './AdminPayments';

function Admins() {
  return (
    <div>
        <AdminNav />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          {/* <Route path="/tutors/proposals" element={<StudentProposals />} /> */}
          <Route path="/payments" element={<AdminPayments />} />
        </Routes>
    </div>
  )
}

export default Admins