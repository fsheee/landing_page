// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { navLinks } from '../constant/Constant'; 
// import { HiBars3BottomRight } from "react-icons/hi2";

// type Props ={
//   openNav:()=>void
// }

// const Nav = ({openNav}):Props => {
  
//   const [navBg,steNavBg]=useState(false);

//   useEffect(()=>{
//     const handler = ()=>{
//       if(window.scrollY >= 90)steNavBg(true);
//       if(window.scrollY < 90)steNavBg(false);
//     };

//     window.addEventListener("scroll",handler);
  
//   return ()=>{
//       window.removeEventListener("scroll",handler);
//     };
//   },[]);

//   return ( 
//     <div className={`fixed ${navBg ? 'bg-white shadow-md' : ''} w-full transition-all duration-200 h-[12vh] z-[1000]`}>

//       <div className="flex items-center h-fulljustify-between w-[90%] xl:w-[80%] mx-auto">
//         {/*logo*/}
//         <h1 className="text-xl md:text-2xl font-bold mt-4"><span className="text-3xl md:text-4xl text-pink-700">A
//           </span>ppify</h1>
//           {/*nav links*/}

//         <div className="hidden lg:flex items-center ml-12 mt-4 space-x-10">
//           {navLinks.map((link)=>{
//             return (
//             <Link href={link.url}
//                   key={link.id} >
//             <p className="nav__link">{link.lable}</p>
//             </Link>
//           );
//           })}
//         </div>
//         {/*button*/}
//         <div className="flex items-center space-x-6 ml-20 mt-4">
//           <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700
//            hover:bg-blue-900 transition-all duration-200 rounded-full">Join Now </button>
//            {/*burger menu */}
//            <HiBars3BottomRight 
//            onClick={openNav}
//            className="w-8 h-8 cursor-pointer text-black lg:hidden" />
//         </div>
//         </div>
      
//     </div>
//   );
// };

// export default Nav;

'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../constant/Constant';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void; // Define the type for the `openNav` prop
};

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? 'bg-white shadow-md' : ''
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold mt-4">
          <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
        </h1>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center ml-12 mt-4 space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.lable}</p>
            </Link>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-6 ml-20 mt-4">
          <button
            className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700
           hover:bg-blue-900 transition-all duration-200 rounded-full"
          >
            Join Now
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
