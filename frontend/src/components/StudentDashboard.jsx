import React from 'react'
import {useEffect, useState} from 'react';

function StudentDashboard() {
  // const [data, setData] = useState({});

  
  let usersData;
  
  useEffect(() => {
    const nameTxt = document.getElementById('name-txt');
    const userEmail = document.getElementById('user-email');
    
    usersData = JSON.parse(localStorage.getItem('userData'));

    nameTxt.innerText = usersData.name;
    userEmail.innerText = usersData._id;
  }, [])

  const makePost = async () => {
    let price = document.getElementById('price');
    let message = document.getElementById('message');

    if(price.value != '' && message.value != ''){
      const res = await addPost(usersData._id, message.value, usersData.edu_details, parseInt(price.value));
      
      console.log(res);

      price.value = '';
      message.value = '';
    } else {
      const invalidNoti = document.getElementById('invalid-noti');

      invalidNoti.classList.remove('hidden');
    }
  }

  const addPost = async (email, des, edu_details, fees) => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
      headers: {
          "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          "studentemail": email,
          "description": des,
          "studentedu": edu_details,
          "expectedfees": fees
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

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 id='name-txt' className="text-3xl font-medium title-font text-white text-left">Name</h1>
          <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add Post</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get all the necessary help you need from our top Professional Tutors.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Expected Fees</label>
            <input type="text" id="price" name="price" placeholder='Enter the Amount' className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" placeholder='Enter Course and Provide Details' className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={makePost} className="flex mx-auto text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Post</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a id='user-email' className="text-indigo-400">example@email.com</a>
        </div>
      </div>
    </div>
    <div id='invalid-noti' className="animate-bounce hidden fixed bottom-0 left-0 p-4 m-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span id='invalid-noti-txt' className="font-medium">Please Fill all Fields!</span>
          </div>
  </div>
</section>
        </div>
      </section>
    </div>
  )
}

export default StudentDashboard;