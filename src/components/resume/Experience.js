import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - further</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN STACK DEVLOPER"
            subTitle="r3sys Pvt. Ltd.- (FEB-2023 - MAR-2023)"
            result="On Campus"
            des="Experinced in MERN stack development , Rest API, MongoDB and Ajaxframework.
            Hands on experienced to build dynamic web apps usingMERN stack technologies. By doing this I become the proficient tobuild the Restful API's, database operations with
            MongoDB andutilizing Ajax for seamless asynchronous communication."
          />
          <ResumeCard
            title="Zensar Technologies"
            subTitle="Zensar Technologies Pvt. Ltd- (Mar 2022 - april 2022)"
            result="Online"
            des="As an intern at Zensar Technologies. I acquired the proficiency in SQL,PL/SQL, and Java. I actively contributing to software develpmentprojects, focusing on query optimization and effective collaborativewith cross functional teams."
          />
          <ResumeCard
            title="Persistant Salesforce"
            subTitle="Salesforce - (May 2022 - Jan 2023)"
            result="Online"
            des="As an Intern at salesforce, I learn the Salesforce cloud by completingthe challenges given to me. The journey of this program is really funactivity and interactive for fresher as well as the experienced person"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Aptitude and Technical Training "
            subTitle="Campus Credentials "
            result="On Campus"
            des="The training provided by our college and in association with Campus credentials in order to prepare our Aptitude and Technical Skill. By this Training we Learn the Aptitude and Python programming. I am thankful to Campus Credential and our college for providing us the Training."
          />
          <ResumeCard
            title="Wipro Talent Next."
            subTitle="Wipro Technologies India Pvt. Ltd."
            result="On Campus "
            des="This is the Training program offer by Wipro Technolgies.In this trainig  We are learning a Full stack Programming Path. In this Java, Hybernet,Angular-js , Html,Css,JavaScript and Github. WE are thankful to our institute and Wipro Technologies for Providing us a really good training  it opens a lot new doors for us to explore. "
          />
          <ResumeCard
            title="TCS Young Professional"
            subTitle="TCS "
            result="Online"
            des="This Training program is offer by Tata Consultancy Services by this training they teach us how the Effective Communication helps us to build a career in a Company and in the daily life also. This Training also help us in our campus placement and in the interview Preparation."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
