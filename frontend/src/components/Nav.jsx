import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">TutoringApp</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                
                {/* <Link to={/studentsignup}>Student Sign In</Link> */}
                <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/student-signin" > Student </Link>
                <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/tutor-signin" > Tutor </Link>
                <Link className="mr-5 text-white hover:text-purple-300 font-medium cursor-pointer" to="/admin-signin" > Admin  </Link>
                <Link className="mr-5 text-purple-500 hover:text-purple-300 font-medium cursor-pointer" to="/create-account" > Create an Account </Link>
            {/* <a className="mr-5 text-white hover:text-white font-medium cursor-pointer"></a> */}
            {/* <a className="mr-5 text-white hover:text-white font-medium cursor-pointer">Tutor Sign in</a>
            <a className="mr-5 text-white hover:text-white font-medium cursor-pointer">Admin Sign in</a> */}
            {/* <a className="mr-5 text-purple-500 hover:text-white font-medium cursor-pointer">Create an Account</a> */}
            </nav>
        </div>
    </header>  
    </>
  )
}

export default Nav