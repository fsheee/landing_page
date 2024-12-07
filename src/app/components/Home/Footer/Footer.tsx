import Link from 'next/link';
import React from 'react';
import { FaClock, FaDribbble, FaEnvelope, FaFacebook, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white py-10">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div >
                {/*logo and description */}
                <h1 className="text-xl md:text-2xl font-bold">
                    <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
                </h1>
                {/*description */}
                <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.                   
                     Facere eos ex neque harum p officiis hic corporis.
                </p>
            </div>
            {/*about */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800">About us</h3>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copyright</li>
                    <li>Popular campaign</li>
                </ul>
            </div>
            {/*information link */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Information</h3>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    <li>Return Policy</li>
                    <li>Privacy Policy</li>
                    <li>Term & Condition</li>
                    <li>Site Map</li>
                    <li>Store Hours</li>
                </ul>
            </div>
            {/*contact info */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                    <li className="flex items-center">
                        <FaMapMarkedAlt className="mr-2" />
                        Pakistan
                    </li>
                    <li className="flex items-center">
                        <FaPhoneAlt className="mr-2" />+92 45363 7482</li>
                    <li className="flex items=center">
                        <FaClock  className="mr-2" />7 Days -8am -10pm</li>
                    <li className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        info.example@gmail.com
                        </li>
                </ul>
            </div>
        </div>
        {/*bottom section */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="text-center md:text-left">
                copyright © 2024 Afsheen.All rights reserved
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>social:</span>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                <FaFacebook />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                <FaTwitter />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800">
                <FaDribbble />
                </Link>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default Footer;
