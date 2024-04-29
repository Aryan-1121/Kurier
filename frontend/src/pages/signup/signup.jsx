import React from 'react'
import GenderCheck from './GenderCheck';

// import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          <span className='text-yellow-800'>Sign-Up</span>     <span className='text-orange-500'> Kurier </span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Full Name' className='w-full input input-bordered input-ghost  h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Username'
              className='input input-bordered input-ghost w-full max-w-xs" '
            />
          </div>


          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-400'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='input input-bordered input-ghost w-full max-w-xs" '
            />
          </div>


          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='w-full input input-bordered input-ghost h-10'
            />
          </div>

          <GenderCheck />

          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
