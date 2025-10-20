import React from 'react'

const IconeMenu = ({	menuAberto, setMenuAberto }) => {
  return (
    <button 
			onClick={() => setMenuAberto(!menuAberto)}
			className='md:hidden z-10 flex flex-col gap-1 cursor-pointer justify-center items-center'
		>
			<span className={`bg-white w-8 h-1 transition-all duration-300 ${menuAberto ? "rotate-45 translate-y-2" : ""}`}></span>		
			<span className={`bg-white w-8 h-1 transition-all duration-300 ${menuAberto ? "opacity-0" : ""}`}></span>		
			<span className={`bg-white w-8 h-1 transition-all duration-300 ${menuAberto ? "-rotate-45 -translate-y-2" : ""}`}></span>
    </button>
  )
}

export default IconeMenu