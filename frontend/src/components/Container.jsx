import React from 'react'

const Container = ({ children, className = "", name = "" }) => {
  return (
    <section
      name={ name } 
      className={`min-h-screen md:border-x-2 border-white bg-gray-800 p-6 ${className}`}
    >
        { children }
    </section>
  )
}

export default Container