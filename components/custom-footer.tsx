import React from 'react'

function customFooter() {
  return (
    <div className='w-full min-h-12 max-h-12 grid grid-cols-2 flex items-center justify-start' style={{ backgroundColor: "#10253dff" }}>
      <div className='text-white flex items-center justify-start ml-3 sm:text-lg md:xl lg:xl xl:2xl 2xl:3xl'>
        <a href="/" className='mr-2'>Datasance</a>
        {`Copyright © ${new Date().getFullYear()}`}
      </div>
    </div>
  )
}

export default customFooter