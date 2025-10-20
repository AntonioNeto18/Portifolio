import React from 'react'

const Container = ({ children, className = "", name = "" }) => {
  return (
    <section
      name={ name } 
      className={`min-h-screen p-6 ${className}`}
    >
        { children }
    </section>
  )
}

export default Container