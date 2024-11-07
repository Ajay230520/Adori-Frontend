import React from 'react'

function Header() {
    return (
        <div className="w-full z-20 bg-[#fff] p-3 flex justify-center items-center fixed">

            <div className='absolute left-5'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </div>
            <div className="">

                <h1 className="text-4xl font-bold font-aeonik goldman-bold tracking-widest">ALDORI</h1>
            </div>

        </div>
    )
}

export default Header
