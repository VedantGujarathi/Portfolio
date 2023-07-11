import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaMedium, FaHackerrank, FaGithub} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';


const ContactLeft = () => {
  
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vedant Gujarathi</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Devloper
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9145526100</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">vedantgujarathi22@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-7">
        <a href="https://www.facebook.com/">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          </a>
          <a href="https://gitHub.com/VedantGujarathi/" >
          <span className="bannerIcon">
            <FaGithub />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/vedant-gujarathi-812aa022a/" >
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
          <a href="https://medium.com/@vedantgujarathi" >
          <span className="bannerIcon">
            <FaMedium />
          </span>
          </a>
        </div>
        <div className="flex gap-7">
        <a href="https://www.hackerrank.com/vedantgujarathi1?hr_r=1" >
          <span className="bannerIcon">
            <FaHackerrank />
          </span>
          </a>
        <a href="https://leetcode.com/vedantgujarathi22/">
          <span className="bannerIcon">
            <SiLeetcode />
          </span>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/vedantguj4a9n">
          <span className='bannerIcon'>
            <SiGeeksforgeeks/>
          </span>
          </a>
          <a href="https://www.codechef.com/users/vedant603">
          <span className='bannerIcon'>
            <SiCodechef/>
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft