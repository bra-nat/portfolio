import React from 'react'

const Badge = ({yearRage}: {yearRage: string}) => {
  return (
    <p className='rounded-xl bg-[#fe0302] px-2 py-0 font-montserrat text-sm text-white'>{yearRage}</p>
  )
}

export default Badge