import React from 'react'
import loading from './loading.gif'

const LoadSpinner = () => {

  return (
    <div className='flex justify-center '>
      <img className='mix-blend-multiply' src={loading} alt="loading" />
    </div>
  )

}


export default LoadSpinner