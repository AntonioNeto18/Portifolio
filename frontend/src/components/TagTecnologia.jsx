import React from 'react'

const TagTecnologia = ({ tecnologia }) => {
  return (
    <div
      className='text-white text-lg uppercase bg-slate-700 border border-slate-500 rounded-full w-fit h-fit px-4 py-1'
    >
      {tecnologia}
    </div>
  )
}

export default TagTecnologia