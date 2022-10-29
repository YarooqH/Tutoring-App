import React from 'react'

import {useQuery} from 'react-query';
import {useEffect} from 'react';

import TutorPayment from './TutorPayment';

function TutorPayments() {
    let userData;

    useEffect(() => {
        userData = JSON.parse(localStorage.getItem('userData'));

        const nameTxt = document.getElementById('name-txt');
        nameTxt.innerText = userData.name;
    }, [])

    const getPosts = async () => {
        const response = await fetch('http://localhost:3000/payments/'+userData._id);
        const data = await response.json();
        // console.log(data);
    
        return data;
    }

    const {data, status} = useQuery("posts", getPosts);

  console.log(data);

        return (
            <div><section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
            <h1 id='name-txt' className="text-3xl font-medium title-font text-white text-left">Name</h1>
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
            {data.map((post) => (
                <TutorPayment key={post.id} id={post.id} data={post} studentEmail={post.studentEmail} receivedAmount={post.receivedAmount} paymentAmount={post.paymentAmount} commissionRate={post.commissionRate} />
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

export default TutorPayments;