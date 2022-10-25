import React from 'react';

import axios from 'axios';

import '../styles/signup.css';

const SignUp = () => {
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

        // let dataObj = {
        //     "_id": email,
        //     "name" : fullName,
        //     "password": pass,
        //     "edu_details": {
        //         "high": highEducation,
        //         "cgpa": cgpa
        //     }
        // }

        // console.log(dataObj);
        if (accountType === "student"){

            postData(email, fullName, pass, edu_details);
            // getData();
            // axios({
            //     method: 'post',
            //     url: '/students',
            //     withCredentials: false,
            //     data: {
            //         email,
            //         fullName,
            //         pass,
            //         edu_details
            //     }
            // })
            // axios.post('/students', {
            //     "_id": email,
            //     "name": fullName,
            //     "password": password,
            //     "edu_details": {
            //         "education": highEducation,
            //         "gpa": cgpa
            //     }
            //   })
        //     const response = await fetch("/students", {
        //     method: "POST",
        //     body: JSON.stringify(dataObj),
        // });

        // console.log(response.json());

            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
        }
        
    }

    const postData = async (eMail, fullName, password, eduDetails) => {
        try {
            const response = await fetch("/students", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                eMail, fullName, password, eduDetails
            }),
        });
            console.log(response);
            // getData();
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        const response = await fetch('/students');
        console.log(response.json());
    }


  return (
    <>
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center">
            <h1 className="title-font font-medium text-3xl text-white">TutoringApp</h1>
            <p className="leading-relaxed mt-4">The World's leading Tutoring Agent Website.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label for="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="password" className="leading-7 text-sm text-gray-400">Password</label>
                <input type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="full-name" className="leading-7 text-xm text-gray-400 block">Education Details</label>
                <label for="full-name" className="leading-3 text-sm text-gray-400">Highest Education</label>
                <input type="text" id="high-education" name="high-education" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 mb-3 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <label for="full-name" className="leading-3 text-sm text-gray-400 pt-3">CGPA</label>
                <input type="text" id="cgpa" name="cgpa" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>

            
            <div className="flex align-center justify-center pb-4">
                <div className="flex items-center mr-4">
                    <input checked readOnly id="inline-radio" type="radio" value="student" name="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
                    <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="teacher" name="account-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
                    <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tutor</label>
                </div>
            </div>

            <button onClick={completeSignup} className="align-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Signup</button>
            {/* <p className="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
            </div>
        </div>
        </section>
    </>
  )
}

export default SignUp;