import React from 'react'
import Navbar from './Navbar'

function Footer() {
    // #111827
  return (
    <>
    <div>
        <div className="flex justify-center p-4 bg-[#111827]">
            <h2 className="text-white hover:scale-105 transition-all duration-700">Created with ❤️ By 
                <span className='bg-clip-text bg-gradient-to-tl from-blue-600 via-blue-300 to-blue-600 text-transparent font-bold '>{" "}Harshal Tupe</span>
            </h2>
        </div>
    </div>
    </>
  )
}

export default Footer