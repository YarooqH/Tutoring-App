import React from 'react';

import {useQuery} from 'react-query';

function StudentPayments() {
    
    const getTutors = async () => {
        const response = await fetch('http://localhost:3000/tutors/emails');
        const data = await response.json();
        console.log(data);
        
        return data;
    }

    const makePayment = async () => {
        const newTutors = document.getElementById('tutors');

        let tutorEmail = newTutors.value;
        let paymentFees = parseInt(document.getElementById('price').value);

        console.log(tutorEmail, paymentFees)

        if(tutorEmail != '' && paymentFees > 0){
            let newData = JSON.parse(localStorage.getItem('userData'));
            postPayment(newData._id, tutorEmail, paymentFees);
            // console.log("here" + newData);
        } else {
            const invalidNoti = document.getElementById('invalid-noti');
            invalidNoti.classList.remove("hidden");
        }

    }

    const postPayment = async (studentEmail, teacherEmail, paymentFees) => {
        let commissionRate = 10; // 10 percent
        let newAmount = paymentFees * (commissionRate / 100 );
        let feesAmount = paymentFees - newAmount;
        try {
            const response = await fetch("http://localhost:3000/payments", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "studentemail": studentEmail,
                "teacheremail": teacherEmail,
                "paymentamount": paymentFees,
                "receivedamount": feesAmount,
                "commissionrate": commissionRate
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
    
    const {data, status} = useQuery('tutors', getTutors);
  return (
    <div>
        <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Make Payment</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Make the necessacy payments on time.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Fees Amount</label>
            <input type="text" id="price" name="price" placeholder='Enter the Amount' className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <select type="text" id="tutors" name="tutors" placeholder='Select Tutor' className="w-full py-3 px-3 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                data.map((tutor) => (
                    <option key={tutor.email} value={tutor.email}>{tutor.email}</option>
                ))
            )}
            </select>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={makePayment} className="flex mx-auto text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make Payment</button>
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
    </div>
  )
}

export default StudentPayments;