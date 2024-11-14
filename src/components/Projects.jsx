import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Cornell Mars Rover BEV</h1>
          <h3 className='text-l text-gray-700'>Controls Software Member</h3>
          <p className='text-sm text-gray-600'>Using Deep Learning models, OpenCV, ROS, and open-source libraries in order to construct a Birds-Eye-View of rover based on forward facing camera feeds. Essential for being able to cohesively observe surroundings during manual rover tasks.</p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>CS 3110 Chess Project</h1>
          <a href='https://github.com/shriyasudhakar/chess' className='text-l text-gray-700'>Github Repo</a>
          <p className='text-sm text-gray-600'>Inspired by chess.com, two classmates and I recreated the game using OCaml. Players can directly interact with the board by dragging and dropping chess pieces, all thanks to OCaml's graphics library. Our game also follows the regular chess game rules and logic, and also allows for some cool moves like en passant!</p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Transportation Optimization</h1>
          <h3 className='text-l text-gray-700'>Advised by Professor Greenberg</h3>
          <p className='text-sm text-gray-600'>Performed data collection and analysis on TCAT bus and walking routes for students. Used classic optimization algorithms such as Traveling Salesman Problem.</p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-indigo-600 rounded-lg hover:bg-indigo-60">
          <h1 className='text-3xl font-semibold'>Medical AI Research</h1>
          <h3 className='text-l text-gray-700'>Advised by Dr. Konte, Georgia Tech</h3>
          <p className='text-sm text-gray-600'>Created ML to perform disease diagnosis based on symptoms. Developed novel dataset.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects