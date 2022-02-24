import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  const isUser = isAuthenticated && user
  return (
    <section className='navbar d-flex align-item-center justify-content-center'>
      {isUser && (
        <div className='img'>
          <img src={user.picture} alt={user.name} />
        </div>
      )}

      {isUser && (
        <h4 className='mx-3 my-0'>
          Welcome, <strong>{user.name}</strong>
        </h4>
      )}

      {isUser ? (
        <button
          className='btn p-0 text-gray'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button className='btn p-0 text-gray' onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </section>
  )
}
