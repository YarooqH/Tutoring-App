import React from 'react';
import '../styles/modal.css';

import {useEffect} from 'react';

function TutorPost(props) {

    useEffect(()=>{
        // let btn = document.getElementById('btn-'+props.i);
        // btn.addEventListener('click', () => {
        //     console.log('new: ' + props.studentEmail);
        //     console.log('new: ' + props.id);
        //     // getData();
        // });

        let myBtn = document.getElementById('myBtn-'+props.i);
        myBtn.addEventListener('click', () => {
            console.log(props.id);
            doit();
        });

        let submitBtn = document.getElementById('submit-btn-'+props.i);
        submitBtn.addEventListener('click', () => {
            getData();
        })
    }, []);

    
    const doit = () => {
        // Get the modal
        let top1 = document.getElementById('top1-'+props.i);
        let top2 = document.getElementById('top2-'+props.i);
        // let closeBtn = document.getElementById('xlose-btn');


        top1.classList.remove('hidden');
        top2.classList.remove('hidden');       
    }

    const closeModal = () => {
        let top1 = document.getElementById('top1-'+props.i);
        let top2 = document.getElementById('top2-'+props.i);
        // let closeBtn = document.getElementById('xlose-btn');


        top1.classList.add('hidden');
        top2.classList.add('hidden'); 
    }

    // const myBtn = document.getElementsByClassName('btn')[0];
    // myBtn.addEventListener('click', () => {
    //     console.log("hello")
    // });

    // const btn = document.getElementById('btn-'+props.id);
    // btn.addEventListener('click', () => {
    //     console.log(props.id);
    // });

    const getData = async () => {
        let fees = document.getElementById('fees-'+props.i).value;
        let msg = document.getElementById('msg-'+props.i).value;

        console.log(props.id);

        let userData = JSON.parse(localStorage.getItem('userData'));

        let postID = props.id;
        let tutorEmail = userData._id;
        let tutorName = userData.name
        let tutorDetails = userData.edu_details;
        let studentEmail = props.studentEmail;

        console.log(tutorEmail, tutorName, msg, tutorDetails, parseInt(fees), studentEmail, postID);

        const proposalID = await makeProposal(tutorEmail, msg, tutorDetails, parseInt(fees), studentEmail, postID);

        if (proposalID) {
            const postUpdate = await addProposalToPost(postID, proposalID);

            if(postUpdate) {
                console.log(postUpdate);
                let newFees = document.getElementById('fees-'+props.i);
                let newMsg = document.getElementById('msg-'+props.i);

                newMsg.innerText = '';
                newFees.innerText = '';

                let successNoti = document.getElementById('success-noti');
                successNoti.classList.remove('hidden');

                setTimeout(() => {
                    successNoti.classList.add('hidden');
                }, 3000);
            } else {
                console.log("error with post");
            }
        } else {
            console.log("error with proposal")
        }
    }

    const makeProposal = async (tutorEmail, tutorMsg, tutorDetails, tutorFees, studentEmail, postID) => {
        try {
            const response = await fetch("http://localhost:3000/proposals", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "tutoremail": tutorEmail,
                "tutormsg": tutorMsg,
                "tutordetails": tutorDetails,
                "tutorfees": tutorFees,
                "studentemail": studentEmail,
                "postid": postID
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

    const addProposalToPost = async (postID, proposalID) => {
        try {
            const response = await fetch("http://localhost:3000/posts/"+postID, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({
                "proposalid": proposalID
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
    <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
      <h2 className="text-lg text-white font-medium title-font mb-2">{props.studentEmail}</h2>
      <p className="leading-relaxed text-base">{props.postDescription}</p>
      <p className="leading-relaxed text-base text-purple-300 py-3 text-center font-medium">Student Education Details </p>
      <ul>
        {/* <li>{'Highest Education: ' + post.studentEducation.education}</li>
        <li>{'CGPA: ' + post.studentEducation.gpa}</li> */}
        {props.education ? <li>{'Education: ' + props.education}</li> : <li>{'Education: Error Fetching'}</li>}
        {props.gpa ? <li>{'CGPA: ' + props.gpa}</li> : <li>{'CGPA: Error Fetching'}</li>}
        {/* <li>{'Education: ' + props.education}</li>
        <li>{'CGPA: ' + props.gpa}</li> */}
      </ul>
      <p className="leading-relaxed text-base text-white float-right my-5">{'Rs. ' + props.expectedFees}</p>
      {/* <button onClick={doit} className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Send Proposal</button> */}
      <button id={'myBtn-'+props.i} className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Send Proposal</button>
    </div>

    <div id={'top1-'+props.i} className='hidden'>
    <div id={'top2-'+props.i} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full">
        {/* <button id={'btn-'+props.i}>CLICK</button> */}
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={closeModal} id='close-btn' type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Proposal</h3>
                <div className="space-y-6">
                    <div>
                        <label htmlFor='fees' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Fees</label>
                        <input type="text" name='fees' id={'fees-'+props.i} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="6000" required />
                    </div>
                    <div>
                        <label htmlFor='msg' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                        <input type="text" name='msg' id={'msg-'+props.i} placeholder="Enter Your Message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    {/* <button id={'btn-'+props.id} onClick={getData} className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Proposal</button> */}
                    <button id={'submit-btn-'+props.i}  className="w-full text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Proposal</button>
                </div>
                <div id='success-noti' className="animate-bounce hidden fixed bottom-0 left-0 m-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span className="font-medium">Account Created Successfuly!</span> Now you can try Logging into your Account.
            </div>
            </div>
        </div>
    </div>
</div> 


    </div>

  </div>
  )
}

export default TutorPost;