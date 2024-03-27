import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div>
      <div className='container mx-auto rounded bg-white '>

        <div className='text-9xl text-center '>404 not found:(</div>
        <div className='text-center'>Let's design some <Link to="/design">T-Shirt </Link> instead!</div>
      </div>
    </div>
  )
}
