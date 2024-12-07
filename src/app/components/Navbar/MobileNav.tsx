// import React from 'react';
// import { navLinks } from '../constant/Constant';
// import Link from 'next/link';
// import { CgClose } from 'react-icons/cg';

// type Props = {
//   showNav: boolean;
//   closeNav: () => void;
// };

// const MobileNav = ({ closeNav, showNav }: Props) => {
//   const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

//   return (
//     <div>
//       {/* Overlay */}
//       <div
//         onClick={closeNav}
//         className="fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen"
//       ></div>
//       {/* Nav Links */}
//       <div
//         className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform
//          transition-all duration-500 delay-300 w-[80%] sm:w-[40%] bg-indigo-900 space-y-6 z-[10006]`}
//         role="dialog"
//         aria-hidden={!showNav}
//       >
//         {navLinks.map((link) => {
//           return (
//             <Link href={link.url} key={link.id}>
//               <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
//                 {link.lable}
//               </p>
//             </Link>
//           );
//         })}
//         {/* Close Icon */}
//         <CgClose
//           onClick={closeNav}
//           className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
//           aria-label="Close Navigation"
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;


import React from 'react';
import { navLinks } from '../constant/Constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props ={
  showNav:boolean;
  closeNav:()=>void;
};


const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav ?'translate-x-0':'translate-x-[-100%]';
  return (
    <div>
    {/*overlay*/}
    <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70
    w-full h-screen`}> 
    </div>
    {/*navlink */}
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform tranisition-all
    duration-500 dlay-300 w-[80%] sm:w-[40%] bg-indigo-900 space-y-6 z-[10006]`}>
      {navLinks.map((link)=>{
            return (
            <Link href={link.url}
                  key={link.id} >
            <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.lable}</p>
            </Link>
          );
          })}
          {/*clsoe icon */}
    <CgClose 
    onClick={closeNav}
    className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
    </div>
    
  </div>
  );
};

export default MobileNav;
