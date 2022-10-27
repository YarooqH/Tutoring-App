import React from 'react'

import {useQuery} from 'react-query';
import {useEffect} from 'react';


function AdminPayments() {
    const getPosts = async () => {
        const response = await fetch('http://localhost:3000/payments/');
        const data = await response.json();
    
        return data;
    }

    const {data, status} = useQuery("posts", getPosts);

    return (
        <div><section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <section className="text-gray-400 bg-gray-900 body-font relative">
    <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">All Payments Made</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Admin Monitoring for Payments.</p>
    </div>
    <section className="text-gray-400 body-font bg-gray-900">
    <div className="container px-5  mx-auto">
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === 'success' && (
    <div className="flex flex-wrap m-4">
        {data.map((post) => (
      <div key={post.id} className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2"><span className='text-purple-300'>From: </span>{post.studentEmail}</h2>
          <h2 className="text-lg text-white font-medium title-font mb-2"><span className='text-green-300'>To: </span>{post.teacherEmail}</h2>
          {/* <p className="leading-relaxed text-base">{post.postDescription}</p> */}
          <p className="leading-relaxed text-base text-purple-300 py-3 text-center font-medium">Payment Details</p>
          {/* <ul>
            <li>{'Highest Education: ' + post.studentEducation.education}</li>
            <li>{'CGPA: ' + post.studentEducation.gpa}</li>
          </ul> */}
          <p className="leading-relaxed text-base font-medium text-white my-5">Amount Received: {'Rs. ' + post.receivedAmount}</p>
          <p className="leading-relaxed text-base text-white">Amount Paid: {'Rs. ' + post.paymentAmount}</p>
          <p className="leading-relaxed text-base text-white">Commission Rate: {post.commissionRate + '%'}</p>
          {/* <button className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Accept Proposal</button> */}
        </div>
      </div>
        ))}
    </div>
    )}
    </div>
    </section>
    </div>
    </section>
        </div>
      </section></div>
      )
}

export default AdminPayments