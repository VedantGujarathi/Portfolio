import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - further</p>
          <h2 className="text-4xl font-bold">Course Completed</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certified Python Programmer"
            subTitle="Google IT Automation"
            result="Success"
            des="In 2022 From Galaxy Computers,Chopda And Also Google It Automation Course Available On Python I Have Done That To Become A Certified Python Programmer. As A Carrer In Full Stack I Have Used The Python Flask As A Backend Programming Language."
          />
          <ResumeCard
            title="Html,CSS, Javascript Master"
            subTitle="ONE MONTH.com"
            result="Success"
            des="In The Time Of Covid-19 Pandamic Period everyone is Eagrly Learning New Things At That Time I Have Also Completed The Html,Css,javascript Course From OneMonth.Com, And I Started To Follow Up The Path Of Full Stack Devloper."
          />
          <ResumeCard
            title="MERN STACK DEVLOPER"
            subTitle="R3SYS Pvt. Ltd."
            result="Success"
            des="In the year of 2023, I have done the MERN Stack devloper certified course from r3sys India pvt.ltd. In this I have a lot to learn and Now I can easily build the dynamic web apps using MERN Stack."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - further</p>
          <h2 className="text-4xl font-bold">Cocuriculum activity </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart India Hackathon"
            subTitle="Goverment Hackathon. (March 21 2022) "
            result="Success"
            des="In this hackathon I have learn various things like how the team work has to be taken out to devloped a perticular solution for an problem.For this hackathon we have cleared the internal hackathon but we are not able to clear the goverment or central level of hackathon."
          />
          <ResumeCard
            title="SUNHACK 2022"
            subTitle="Sandip University, nashik.(Nov. 12 2022)."
            result="Success"
            des="This hackathon also gave me the chance to enhanced my communication skills and also help me to evlove the team work ability and leadership skill.our Topic for the hackathon is Monumenet identity detection and information using Augented reality on a web portal."
          />
          <ResumeCard
            title="Avishkar 2022"
            subTitle="Dr. Babasaheb Ambedkar Technical University, Lonere."
            result="Success"
            des="In this compitition we have participated as a team of four students and topic we have represented for avishkar is Graphical Password Authentication. In this we have to give a Poster Presentation. There are the various levels of hackathon. In this we have go upto UG Level.But I have leran a Lot new things."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
