import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0()

  const isUser = isAuthenticated && user
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to='/login'></Redirect>
      }}
    ></Route>
  )
}
