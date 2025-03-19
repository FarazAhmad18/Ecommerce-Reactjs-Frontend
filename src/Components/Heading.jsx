import React from 'react'

const Heading = ({children,className=''}) => {
  return (
    <div className={`text-red-600 border-l-8 pl-2 border-red-600 font-semibold ${className}`}>
      {children}
    </div>
  )
}

export default Heading
