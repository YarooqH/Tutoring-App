import React from 'react';
import {useQuery} from 'react-query';

import StudentProposal from './StudentProposal';

function StudentProposals() {

  const getProposals = async () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const response = await fetch('http://localhost:3000/proposals/student/'+userData._id);
    const data = await response.json();
    console.log(data);

    return data;
  }

  const {data, status} = useQuery("proposals", getProposals);

  console.log(data);

  return (
    <div>
        <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Tutor Proposals</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Select the best Tutor for yourself from our already Handpicked top individuals at the price you find Reasonable.</p>
    </div>
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && <p>Fetching data...</p>}
    {status === 'success' && (
    <div className="flex flex-wrap m-4">
        {data.map((post) => (
          // {let education = post.studentEducation.education ? post.studentEducation.education : 'not found'}
          <StudentProposal key={post.id} data={post} id={post.id} />
        ))}
    </div>
    )}

      

  </div>
</section>
    </div>
  )
}

export default StudentProposals