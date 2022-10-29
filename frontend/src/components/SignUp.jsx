import React from 'react';

import '../styles/signup.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const completeSignup = () => {
        let email = document.getElementById('email').value;
        let fullName = document.getElementById('full-name').value;
        let pass = document.getElementById('password').value;
        let highEducation = document.getElementById('high-education').value;
        let cgpa = document.getElementById('cgpa').value;
        let accountType = document.querySelector('input[name="account-type"]:checked').value;

        let edu_details = {
            "education": highEducation,
            "gpa": cgpa
        }

        console.log(edu_details);

        let dataObj = {
            "_id": email,
            "name" : fullName,
            "password": pass,
            "edu_details": {
                "high": highEducation,
                "cgpa": cgpa
            }
        }

        console.log(dataObj);
        console.log(cgpa);
        console.log(highEducation);

        if (email != '' && fullName != '' && pass != '' && highEducation != '' && cgpa != ''){
            if (accountType == "student"){
                const res = postStudentData(email, fullName, pass, edu_details);
                if ( res ){
                    document.getElementById('email').value = '';
                    document.getElementById('full-name').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('high-education').value = '';
                    document.getElementById('cgpa').value = '';
    
                    const successNoti = document.getElementById('success-noti');
                    successNoti.classList.remove("hidden");

                    setTimeout(() => {
                        navigate('/student-signin');
                    }, 1500);
                }
            } else if (accountType == "tutor"){
                const res = postTutorData(email, fullName, pass, edu_details);
                if ( res ){
                    document.getElementById('email').value = '';
                    document.getElementById('full-name').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('high-education').value = '';
                    document.getElementById('cgpa').value = '';
    
                    const successNoti = document.getElementById('success-noti');
                    successNoti.classList.remove("hidden");

                    setTimeout(() => {
                        navigate('/tutor-signin');
                    }, 1500);   
                }
            }
        } else {
            const invalidNoti = document.getElementById('invalid-noti');
            invalidNoti.classList.remove("hidden");
        }
        
    }

    const checkPass = () => {
        let pass = document.getElementById('password').value;
        let invalidNoti = document.getElementById('invalid-noti');

        if(pass.length > 20){
            invalidNoti.innerText = 'Password Length Cannot be more than 20 Characters';
            invalidNoti.classList.remove('hidden');
        }
    }

    const postStudentData = async (eMail, fullName, password, eduDetails) => {
        try {
            const response = await fetch("http://localhost:3000/students", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "_id": eMail,
                "name": fullName,
                "password": password,
                "edu_details": eduDetails
            }),
        });

        const res = await response.json();

            if (res) {
                return res;
            }
        } catch (e) {
            return e;
        }
    }

    const postTutorData = async (eMail, fullName, password, eduDetails) => {
        try {
            const response = await fetch("http://localhost:3000/tutors", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "_id": eMail,
                "name": fullName,
                "password": password,
                "edu_details": eduDetails
            }),
        });

        const res = await response.json();

        if (res) {
            // console.log(res);
            return res;
        }
        } catch (e) {
            // console.log(e)
            return e;
        }
    }

    const getStudentData = async () => {
        const response = await fetch('http://localhost:3000/students');
        const data = await response.json();

        console.log(data);
    }

    const getTutorData = async () => {
        const response = await fetch('http://localhost:3000/tutors');
        const data = await response.json();

        console.log(data);
    }


  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-12 justify-around mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center">
            <h1 className="title-font font-medium text-3xl text-white">TutoringApp</h1>
            <p className="leading-relaxed mt-4">The World's leading Tutoring Agent Website.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                <input type="password" id="password" name="password" onChange={checkPass} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="mb-3 text-white text-lg font-medium title-font mb-5 block">Education Details</label>
                <label htmlFor="full-name" className="leading-3 text-sm text-gray-400 mb-5">Highest Education</label>
                <input type="text" id="high-education" name="high-education" className="w-full mt-1 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 mb-3 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                <label htmlFor="full-name" className="leading-3 text-sm text-gray-400 mb-5">CGPA</label>
                <input type="text" id="cgpa" name="cgpa" className="w-full mt-1 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>

            
            <div className="flex align-center justify-center pb-4">
                <div className="flex items-center mr-4">
                    <input checked readOnly id="inline-radio" type="radio" value="student" name="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
                    <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="tutor" name="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
                    <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tutor</label>
                </div>
            </div>

            <button onClick={completeSignup} className="align-center text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded font-semibold text-lg">Signup</button>
            {/* <p className="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
            </div>
            <div id='success-noti' className="animate-bounce hidden fixed bottom-0 left-0 m-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span className="font-medium">Account Created Successfuly!</span> Now you can try Logging into your Account.
            </div>
            <div id='invalid-noti' className="animate-bounce hidden fixed bottom-0 left-0 p-4 m-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span className="font-medium">Please Fill all Fields!</span>
            </div>
        </div>
        </section>
    </>
  )
}

export default SignUp;