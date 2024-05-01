import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    <span className='text-yellow-800'>Login</span>
                    <span className='text-orange-500'> Kurier</span>
                </h1>

                <form >

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
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


                    <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login