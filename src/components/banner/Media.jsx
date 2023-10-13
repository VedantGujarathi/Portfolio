import React from 'react'
import {  SiReact, SiC, SiPython, SiNodedotjs, SiMongodb, SiBigbluebutton, SiMicrosoftexcel, SiGit } from "react-icons/si";
import { Vedant_Gujarathi } from '../../assets';

const handleClick = () =>{
  console.log("link is clicked ");
}

const Media = () => {
  return (
    <div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://www.facebook.com/" onClick={handleClick}>
            <span className="bannerIcon">
              <FaFacebookF/>   
            </span>
            </a>
            <a href="https://gitHub.com/VedantGujarathi/" onClick={handleClick}>
            <span className="bannerIcon">
              <FaGithub />   
            </span>
            </a>
            <a href="https://www.linkedin.com/in/vedant-gujarathi-812aa022a/" onClick={handleClick}>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
          </div>
        </div> */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiC/>
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className='bannerIcon'>
              <SiMicrosoftexcel/>
            </span>
            <span className='bannerIcon'>
              <SiGit/>
            </span>
          </div>
          
        </div>
      </div>
      <div>
          <div className="flex gap-4 mt-8">
            <a href={Vedant_Gujarathi} onClick={handleClick}>
          <button class="bg-zinc-900 hover:bg-zinc-800 text-white-100 font-bold py-4 px-4 rounded inline-flex items-center" >
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download CV</span>
          </button>
          </a>
          </div>
      </div>
      </div>
  )
}

export default Media