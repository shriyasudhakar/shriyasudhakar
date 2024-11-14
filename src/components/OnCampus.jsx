import React from 'react'

const OnCampus = () => {
  return (
    <div id='on campus' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>On Campus Involvements</h1>
      <div className='grid grid-cols-1 gap-5'>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Women in Computing Cornell (WICC)</h1>
          <h3 className='text-xl font-semibold'>Career Development Director & Technical Committee Member!</h3>
          <li>
            At WICC, we work towards building a supportive tech community for women and allies
          </li>
          <li>
            As one of the current Career Development Co-Director, I help develop career and mentorship workshops to help students develop technical skills, prepare them for career recruitment processes, and explore different avenues in tech (SWE, PM, UX, Research, etc.) Hundreds of students at Cornell attend WICC events and I'm super proud to be making a big difference in my community :D
          </li>
          <li>
            I'm also a member of the Technical Committee where we work on designing and developing WICC's website, improving resource accessibility and information about WICC. See our website: <a href='https://wicc.cornell.edu/#/'>https://wicc.cornell.edu/#/</a>
          </li>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Cornell Mars Rover</h1>
          <h3 className='text-xl font-semibold'>Controls Software Subteam Member</h3>
          <p className='text-sm text-gray-600'></p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Cornell Orchestras</h1>
          <h3 className='text-xl text-gray-700'>Fundraising Co-Chair and Violinist</h3>
          <p className='text-sm text-gray-600'></p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Cornell Tech Consulting</h1>
          <h3 className='text-xl text-gray-700'>Analyst</h3>
          <p className='text-sm text-gray-600'></p>
        </div>
      </div>
    </div>
  )
}

export default OnCampus