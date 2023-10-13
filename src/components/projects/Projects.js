import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix,projectSeven,projectEight,projectNine, projectTen } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio  Using MERN STACK"
          des="This is the Dynamic Portfolio Website using React-Js. This website is Hosted on Vercel.com"
          src={projectOne}
          gitLink=""
          globLink="#"
        />
        <ProjectsCard
          title="Converges Website"
          des="This is the Website we build for an event of our institute called Converges. This website has Payment gateway integration.This Website is Hosted lived on our college website."
          src={projectSeven}
          gitLink="https://github.com/VedantGujarathi/Converges2k23"
          globLink="https://www.rcpit.ac.in/converges/"  
        />
        
        <ProjectsCard
          title="Saksham Charitable Trust Website"
          des="This Website is created using a React-Js. This Website has Payment Gateway integration using RozarPay API. This Website is Hosted on Github.com"
          src={projectThree}
          gitLink="https://github.com/VedantGujarathi/Saksham.github.io"
          globLink=" https://vedantgujarathi.github.io/Saksham.github.io/"
        />
        <ProjectsCard
          title="Book Log Web-App Using MERN "
          des="This is the simple Web-App having the all the CRUD operations implemented. This just the Simple Web-app for an User to understand the book is already read or not. Web-App is Hosted on Vercel.com"
          src={projectFour}
          gitLink="#"
          globLink="#"
        />
        <ProjectsCard
          title="ToDo List Webapp"
          des="In this Project I have Created a ToDO List Webapp. This is build uisng Html,Css,JavaScript. This is the Static Website and No backend is there for the given Project."
          src={projectNine}
          gitLink="https://github.com/VedantGujarathi/ToDoList"
          globLink="https://to-do-list-teal-xi.vercel.app/"
        />
        <ProjectsCard
          title="NewsX Android App Using React-Native"
          des="In this Project I have Created a NEWSX. This is build by using React-Native. This is the Android Application where I have used the NEWSDATA.io Api for news fetching. and No backend is there for the given Project."
          src={projectTen}
          gitLink="https://github.com/VedantGujarathi/ToDoList"
          globLink="https://to-do-list-teal-xi.vercel.app/"
        />
        <ProjectsCard
          title="Graphical Password Authentication"
          des="This is our Software Solution for the problem given to us in the samrt India Hackathon. The Project is Build on Java Technology. This is a Desktop Application so no Hosting is there."
          src={projectEight}
          gitLink="https://github.com/VedantGujarathi/Graphical-Password-Authentication"
          globLink="#"
        />
        <ProjectsCard
          title="Steganography Gui Using Tkinter Python."
          des="This is a Gui Application Build using Tkinter. In this We have Demonstrated the steghide functionality. This is also Converted from .py to .exe you can check it out Github. No Global Hosting Link is there."
          src={projectTwo}
          gitLink="https://github.com/VedantGujarathi/Steganography-Gui-Using-Tkinter"
          globLink="#"
        />
        <ProjectsCard
          title="Student Study Hours Prediction Using Machine learning and Streamlit"
          des="This is the machine learning model which predicts the Student Study Hours using the given data. The Model is deplyed using Streamlit Framework of Python. and Hosted on the Stramlit Cloud."
          src={projectFive}
          gitLink="https://github.com/VedantGujarathi/Student_Study_Hours_prediction"
          globLink="https://vedantgujarathi-student-study-hours-prediction-main-5hymil.streamlit.app/"
        />
        <ProjectsCard
          title="Insurance Cost Prediction using Machine learning and Streamlit"
          des="In this Prediction model on the given input the model predict the insurance value the user get from any firm. This model is deployed using Streamlit and Hosted on Streamlit Cloud"
          src={projectSix}
          gitLink="https://github.com/VedantGujarathi/Insurance_Price_Prediction"
          globLink="https://vedantgujarathi-insurance-price-predicti-insurance-model-v6l39f.streamlit.app/"
        /> 
      </div>
    </section>
  );
}

export default Projects