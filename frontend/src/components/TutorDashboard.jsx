import React from 'react';

import {useEffect} from 'react';
import {useQuery} from 'react-query';

import TutorPost from './TutorPost';

function TutorDashboard() {
  
  let usersData;

  // let i = 0;
  
  useEffect(() => {
    const nameTxt = document.getElementById('name-txt');
    // const userEmail = document.getElementById('user-email');
    
    usersData = JSON.parse(localStorage.getItem('userData'));

    nameTxt.innerText = usersData.name;

    // const data = getPosts();
    // userEmail.innerText = usersData._id;
  }, []);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3000/posts/');
    const data = await response.json();
    // console.log(data);

    return data;
  }

  const addTution = (post) => {
    console.log(post);
  }

  const {data, status} = useQuery("posts", getPosts);

  console.log(data);
  // const makePost = async () => {
  //   let price = document.getElementById('price');
  //   let message = document.getElementById('message');

  //   if(price.value != '' && message.value != ''){
  //     const res = await addPost(usersData._id, message.value, usersData.edu_details, parseInt(price.value));
      
  //     console.log(res);

  //     price.value = '';
  //     message.value = '';
  //   } else {
  //     const invalidNoti = document.getElementById('invalid-noti');

  //     invalidNoti.classList.remove('hidden');
  //   }
  // }


  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 id='name-txt' className="text-3xl font-medium title-font text-white text-left ml-10">Name</h1>
          <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Available Tutoring Posts</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Dont miss the Golden Opportunity to help students in need.</p>
    </div>
    <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5  mx-auto">
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === 'success' && (
    <div className="flex flex-wrap m-4">
        {data.map((post, index) => (
          // {let education = post.studentEducation.education ? post.studentEducation.education : 'not found'}
          <TutorPost key={post.id} data={post} i={index} id={post.id} studentEmail={post.studentEmail} postDescription={post.postDescription} education={post.studentEducation.education} gpa={post.studentEducation.gpa} expectedFees={post.expectedFees} />
        ))}
    </div>
    )}
  </div>
</section>
  </div>
</section>
        </div>
      </section>
    </div>
  )
}

export default TutorDashboard;