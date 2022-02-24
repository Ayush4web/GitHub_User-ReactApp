import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <section className='container-fluid section'>
      <div className='row '>
        <div className='col-md-5'>
          <img
            src='https://publictrainingcenters.com/img/login-img.png'
            alt=''
            className='w-100'
          />
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
          <h1 className='text-center text-info display-2'> GitHub Users </h1>
          <button
            className='btn btn-dark mt-5 w-50'
            onClick={loginWithRedirect}
          >
            Login / Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}
