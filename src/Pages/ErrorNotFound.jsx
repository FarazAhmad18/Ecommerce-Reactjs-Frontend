import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
const ErrorNotFound = () => {
  const navigate=useNavigate();
  const goHome=()=>{
    navigate('/');
  }
  return (
    <div className='text-center pb-20 pt-20 space-y-9'>
    <h1 className='text-4xl sm:text-6xl font-semibold tracking-wider sm:tracking-widest'>404 Not Found</h1>
    <p className='text-sm max-w-xs sm:max-w-md mx-auto'>Your visited page not found. you may go home page</p>
    <Button onClick={goHome}>Back to home page</Button>
    
    </div>
  )
}

export default ErrorNotFound
