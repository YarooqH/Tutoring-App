import React from 'react';

import {Link} from 'react-router-dom';

function StudentNav() {
  return (
    <>
    <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <span className="ml-3 text-xl">TutoringApp</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/students/proposals" > Proposals </Link>
                {/* <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/tutor-signin" >  </Link> */}
                <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/students/" > Dashboard  </Link>
                <Link className="mr-5 text-purple-500 hover:text-purple-300 font-medium cursor-pointer" to="/create-account" > Payments </Link>
            </nav>
        </div>
    </header>  
    </>
  )
}

export default StudentNav