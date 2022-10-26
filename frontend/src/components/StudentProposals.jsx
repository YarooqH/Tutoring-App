import React from 'react'

function StudentProposals() {
  return (
    <div>
        <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Tutor Proposals</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">Select the best Tutor for yourself from our already Handpicked top individuals at the price you find Reasonable.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div> */}
          <h2 className="text-lg text-white font-medium title-font mb-2">Shooting Stars</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          <p className="leading-relaxed text-base text-white float-right my-5">Price.</p>
          <button className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Accept Proposal</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default StudentProposals