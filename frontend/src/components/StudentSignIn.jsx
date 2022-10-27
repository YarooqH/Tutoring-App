import React from 'react'

import { useNavigate } from 'react-router-dom';

const StudentSignIn = () => {

  const navigate = useNavigate();

  const getData = async () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // console.log(email.value, password.value);

    if(email.value != '' || password.value != ''){
      let dataRes = await fetchUserData(email.value);
    
      if(dataRes){
        // console.log(email.value);
        // console.log(password.value);
        // console.log(dataRes._id);
        // console.log(dataRes);
          if(email.value == dataRes._id && password.value == dataRes.password){
            // navigate('students/student-dashboard');
            console.log(JSON.stringify(dataRes));
            localStorage.setItem('userData', JSON.stringify(dataRes));
            navigate('../students/');
            // navigate('../tutors/tutor-dashboard');

            email.value = '';
            password.value = '';
          } else {
            const invalidNoti = document.getElementById('invalid-noti');
            const invalidNotiTxt = document.getElementById('invalid-noti-txt');

            invalidNotiTxt.innerText = 'Incorrect Email or Password.'

            invalidNoti.classList.remove('hidden');
          }
      } else {
        const invalidNoti = document.getElementById('invalid-noti');
        const invalidNotiTxt = document.getElementById('invalid-noti-txt');

        invalidNotiTxt.innerText = 'Account Does not Exist.'

        invalidNoti.classList.remove('hidden');
      }
    } else {
      const invalidNoti = document.getElementById('invalid-noti');
      invalidNoti.classList.remove('hidden');
    }
  }

  const fetchUserData = async (email) => {
    const response = await fetch('http://localhost:3000/students/'+email);
    const data = await response.json();
    // console.log(data);

    return data;
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Student Sign-In</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Login and Unleash your Full Academic Potential with the Best Tutors available.</p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Email Address</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative sm:mb-0 flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Password</label>
              <input type="password" id="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={getData} className="text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">SignIn</button>
          </div>
          <div id='invalid-noti' className="animate-bounce hidden fixed bottom-0 left-0 p-4 m-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span id='invalid-noti-txt' className="font-medium">Please Fill all Fields!</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentSignIn;