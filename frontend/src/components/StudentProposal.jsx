import React from 'react';
import {useQuery} from 'react-query';

function StudentProposal(props) {
    const getPost = async () => {
        const response = await fetch('http://localhost:3000/posts/'+props.data.postID);
        const data = await response.json();
        // console.log(data);
    
        return data;
      }

    const {data, status} = useQuery("posts", getPost);

    console.log(data)

    const accept = async () => {
        let tutorEmail = props.data.tutorEmail;
        let studentEmail = data.studentemail;
        let fees = props.data.tutorFees;
        let postID = props.data.postID;

        const tutionRes = await addTution(tutorEmail, studentEmail, fees);

        if(tutionRes){
            // let delProposalRes = await deleteProposal(postID);
            // let delPostRes = await deletePost(postID);
        } else {

        }
    }  

    const deleteProposal = async(postID) => {
        try {
            const response = await fetch("http://localhost:3000/proposals/"+postID, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"            
        });

        const res = await response.json();
        if (res) {
            return res;
        }
        } catch (e) {
            return e;
        }
    }

    const deletePost = async(postID) => {
        try {
            const response = await fetch("http://localhost:3000/posts/"+postID, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"            
        });

        const res = await response.json();
        if (res) {
            return res;
        }
        } catch (e) {
            return e;
        }
    }

    const addTution = async (tutorEmail, studentEmail, tutionFees) => {
        try {
            const response = await fetch("http://localhost:3000/tutions", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "tutoremail": tutorEmail,
                "studentemail": studentEmail,
                "tutionfees": tutionFees
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
    <>
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">From: {props.data.tutorEmail}</h2>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === 'success' && (
                <div>
                <p className="leading-relaxed text-base">For Post: {data.description}</p>
                <p className="leading-relaxed text-base">Your Expected Fees: {data.expectedfees}</p>
                </div>
            )}
            <p className="leading-relaxed text-base">Tutor Message: {props.data.tutorMsg}</p>
          <p className="leading-relaxed text-base text-white float-right my-5">Rs. {props.data.tutorFees}</p>
          <button onClick={accept} className='bg-purple-600 px-2 py-2 mt-5 text-sm hover:bg-purple-700 text-white rounded-md'>Accept Proposal</button>
        </div>
      </div>
    </>
  )
}

export default StudentProposal