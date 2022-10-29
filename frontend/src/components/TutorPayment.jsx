import React from 'react'

function TutorPayment(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <h2 className="text-lg text-white font-medium title-font mb-2"><span className='text-purple-300'>From: </span>{props.studentEmail}</h2>
            {/* <p className="leading-relaxed text-base">{post.postDescription}</p> */}
            <p className="leading-relaxed text-base text-purple-300 py-3 text-center font-medium">Payment Details</p>
            {/* <ul>
                <li>{'Highest Education: ' + post.studentEducation.education}</li>
                <li>{'CGPA: ' + post.studentEducation.gpa}</li>
            </ul> */}
            <p className="leading-relaxed text-base font-medium text-white my-5">Amount Received: {'Rs. ' + props.receivedAmount}</p>
            <p className="leading-relaxed text-base text-white">Amount Paid: {'Rs. ' + props.paymentAmount}</p>
            <p className="leading-relaxed text-base text-white">Commission Rate: {props.commissionRate + '%'}</p>
            {/* <button className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Accept Proposal</button> */}
            </div>
    </div>
  )
}

export default TutorPayment