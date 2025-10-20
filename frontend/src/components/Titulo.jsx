import React from 'react'
import Divisor from './Divisor'

const Titulo = ({ texto }) => {
  return (
    <div className='flex flex-col items-center md:items-start'>
      <h2
        className='text-3xl bg-gradient-to-tr from-cyan-500 to-white bg-clip-text text-transparent uppercase font-orbitron font-bold text-center md:text-left'
      >
        { texto }
      </h2>
      <Divisor />
    </div>
  )
}

export default Titulo