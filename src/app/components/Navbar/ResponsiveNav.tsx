'use client'
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [shownav,setShowNav] = useState(false);
  const handleNavShow =() =>{
    setShowNav(true);
  };
  const handlenavHide = ()=>{
    setShowNav(false);
  };
  
  return (
     <div>
     <Nav openNav = {handleNavShow} />
       <MobileNav  showNav={shownav} closeNav={handlenavHide}/>
     </div>
    
    
  );
};

export default ResponsiveNav;


