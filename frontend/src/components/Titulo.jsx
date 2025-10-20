import React from 'react'

const Titulo = ({ texto }) => {
  return (
    <>
      <h2
        className='text-3xl bg-gradient-to-tr from-cyan-500 to-white bg-clip-text text-transparent uppercase font-orbitron font-bold'
      >
        { texto }
      </h2>
      <div className='w-25 h-1 bg-cyan-500'></div>
    </>
  )
}

export default Titulo