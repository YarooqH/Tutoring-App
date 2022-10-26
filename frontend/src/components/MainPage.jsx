import React from 'react'
import logo from '../assets/img1.svg';

import Nav from './Nav';


function MainPage() {
    // const logo = require('../assets/img1.svg');
  return (
    <div className='flex align-center justify-center'>
    <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center pt-8">
        <a className="flex title-font font-medium items-center justify-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-6xl pb-5">TutoringApp</span>
        </a>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officia corrupti dignissimos tenetur tempora assumenda facere ad. Enim eveniet suscipit laudantium beatae velit reprehenderit nemo repellat, odio earum, molestiae voluptatum.</p>
    </div>
    <img className='w-3/6 pr-3' src={logo} alt="logo"  />
    </div>
  )
}

export default MainPage