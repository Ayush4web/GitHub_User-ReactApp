import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import loader from '../preloader.gif'
 
export const AuthWrapper = ({children}) => {
 const { isLoading, error} = useAuth0()
 if (isLoading) {
   return (
     <div className='text-center my-4'>
       <img src={loader} className='' alt='Loading' />
     </div>
   )
 }
 if (error) {
  return <h1>{ error.message}</h1>
 }
 return (
  <>{ children}</>
  )
}
