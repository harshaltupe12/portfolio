import React from 'react'

function Education() {
  return (
    <div>
        <h2 className="md:ml-8 ml-4 my-6 md:mb-10">
          <span className="md:text-4xl text-3xl ml-2 md:ml-4 ">Higher {" "}</span> 
          <span className="bg-clip-text bg-gradient-to-tl from-blue-600 via-red-400 to-violet-600 text-transparent md:text-4xl text-3xl font-bold">
            Education
          </span>
        </h2>
        <div className="flex md:flex-row flex-col gap-8 md:gap-24 justify-center items-center mt-4">
            <div className="flex flex-col justify-center items-center md:flex-row w-[320px] md:w-[600px] rounded-lg border-2 p-4 gap-5 hover:scale-105 transition-all duration-500 hover:border hover:border-purple-300">
                <div className="left flex-[1]">
                    <img src="/mgm.png" className='rounded-sm' height={200} width={200} alt="" />
                </div>
                <div className="right flex-[2] flex flex-col gap-2">
                <div className="font-bold">MGM College of Engineering & Technology </div>
                    <div className=""><span className="font-bold">University : </span> University of Mumbai</div>
                    <div className=""><span className="font-bold">Course : </span> BE in Computer Science</div>
                    <div className=""><span className="font-bold">Start Date : </span> November 2022 </div>
                    <div className=""><span className="font-bold">End Date : </span> May 2025</div>
                    <div className=""><span className="font-bold">CGPA : </span> 8.13</div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row w-[320px] md:w-[600px] rounded-lg border-2 p-4 gap-5 hover:scale-105 transition-all duration-500 hover:border hover:border-purple-300">
                <div className="left flex-[1]">
                    <img src="/msbte.jpeg" className='rounded-sm' height={200} width={200} alt="" />
                </div>
                <div className="right flex-[2] flex flex-col gap-2">
                <div className="font-bold">Government Polytechnic Pen </div>
                    <div className=""><span className="font-bold">University : </span> MSBTE</div>
                    <div className=""><span className="font-bold">Course : </span> Diploma in Computer Technology</div>
                    <div className=""><span className="font-bold">Start Date : </span> August 2018 </div>
                    <div className=""><span className="font-bold">End Date : </span> May 2022</div>
                    <div className=""><span className="font-bold">CGPA : </span> 83.89%</div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Education