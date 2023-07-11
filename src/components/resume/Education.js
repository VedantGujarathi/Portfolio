import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"> 2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SSC Board"
            subTitle="Vivekanand Vidyalaya Chopda. (2008 - 2018)"
            result="85%"
            des="In 2018, I Have Passed My 10th Boards(SSC) Exam From My Home Town Chopda Dist Jalgoan, And In That Exam I Secure 85%."
          />
          <ResumeCard
            title="HSC Board"
            subTitle="ASC College Chopda (2018 - 2020)"
            result="68%"
            des="In 2020 , I Have Passed 12th Boards(HSC) Exam And Secure 68%. Exam Was Held In My Hometown Chopda From ASC College Chopda."
          />
          <ResumeCard
            title="B.Tech - Computer"
            subTitle="R.C.Patel institute of technology,Shirpur (2020 - 2024)"
            result="8.05/10"
            des="Currently, I Have Been Enrolled In The Program Called Btech In Computer. Program Duration Is Of 4 Years. Currently,I'm In The Third Year Of This Program, And Required 1 Years More To Complete It. In The August Of 2024 It Will Get Completed."
          />
          <ResumeCard
            title="M.Tech - Computer"
            subTitle="2025-2027"
            result="-"
            des="Yet to Start pursuing degree."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education