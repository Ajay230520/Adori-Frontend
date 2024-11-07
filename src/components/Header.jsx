import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full z-20 bg-[#fff] p-3 flex justify-center items-center fixed ">
      {/* SVG Icon for the menu */}
      <div className="absolute left-5 cursor-pointer" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </div>

      {/* Title */}
      <div className="">
        <h1 className="text-4xl font-bold font-aeonik goldman-bold tracking-widest">ALDORI</h1>
      </div>

      {/* Conditional rendering of the menu */}
      {isMenuOpen && (
        <div className="menu bg-white absolute top-[10vh] left-0 w-[50vw] h-[100vh] shadow-lg flex flex-col p-4">
          <ul className='bg-white'>
            <li className="menu-item py-2 border-b border-gray-300 hover:border-gray-600">Home</li>
            <li className="menu-item py-2 border-b border-gray-300 hover:border-gray-600">About</li>
            <li className="menu-item py-2 border-b border-gray-300 hover:border-gray-600">Services</li>
            <li className="menu-item py-2 border-b border-gray-300 hover:border-gray-600">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
