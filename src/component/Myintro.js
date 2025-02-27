import React from 'react'

export default function Intro() {
  return (
    <div className='intro'>
      <h2>About Me</h2>
      <p>As a dedicated MERN Stack Developer, I have extensive experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My expertise lies in creating dynamic, responsive, and efficient applications that provide excellent user experiences and robust performance. I am proficient in both front-end and back-end development, ensuring seamless integration and functionality across the entire stack. With a focus on scalability and maintainability, I am committed to delivering high-quality solutions that meet the needs of users and stakeholders.</p> <br />
      {/* Education */}
      <h2>Education-</h2>
      <p>❖ Btech in CSE specialisation in cyber security and digital forensics | Vellore institute of technology Bhopal          <br />
         <b> <i> CGPA-8.45 </i> </b>| (Oct ‘22- jun ‘26) </p>
      <p>❖ XII (CBSE) | Kendriya Vidyalaya   <br />
          <b> <i> 82.4% </i></b>| 2021</p> <br />
      {/* Projects */}
      <h2>Projects-</h2>
      <h4>❖ iNoteBook– Notes secure in the cloud</h4>
      <p>An end to end react based application where user can easily login/signup with
        their account and they can read , write and update their notes. <br></br>
        Tech stack- React js,MongoDB, Express js, Node js, HTML, JavaScript, Bootstrap.</p> <br />
      <h4>❖ NewsGrab- APIs based news application</h4>
      <p>A News API based application for getting real-time news from all over the world
        where news is divided into several categories for user choice. <br />
        Tech stack- React js, HTML, CSS, javascript, Bootstrap.</p> <br />
      <h4>❖ TextUtils- Analyse your Text</h4>
      <p>Textutils is an application and Character count tool that provides instant character
        count and word count statistics for a given text.TestUtils reports <br /> the number of
        words and characters. Thus, it is suitable for writing text with word/character limit. <br />
        Tech stack- JavaScript, CSS, JavaScript, HTML, React, Bootstrap.</p> <br />
      <h4>❖ PDF Merger– Merge pdfs</h4>
      <p>A Node and Express based application where users can merge their pdf according
        to their choice. <br />
        Tech stack- Node js,Express js, Javascript, HTML, Bootstrap.</p> <br />
          {/*skills */}
      <h2>My skill</h2>
      <div className='skillcontainer'>
        <div className="skillitem">HTML: <div className="fullbox"><div className="skill hundred"></div></div></div>
        <div className="skillitem">CSS: <div className="fullbox"><div className="skill fifty"></div></div></div>
        <div className="skillitem">JAVASCRIPT: <div className="fullbox"><div className="skill hundred"></div></div></div>
        <div className="skillitem">C++: <div className="fullbox"><div className="skill seventyfive"></div></div></div>
        <div className="skillitem">PYTHON: <div className="fullbox"><div className="skill hundred"></div></div></div>
        <div className="skillitem">REACT JS: <div className="fullbox"><div className="skill fifty"></div></div></div>
        <div className="skillitem">NODE JS: <div className="fullbox"><div className="skill hundred"></div></div></div>
        <div className="skillitem">EXPRESS JS: <div className="fullbox"><div className="skill"></div></div></div>
        <div className="skillitem">MONGODB JS: <div className="fullbox"><div className="skill seventyfive"></div></div></div>
        <div className="skillitem">WEB DEVELOPMENT: <div className="fullbox"><div className="skill hundred"></div></div></div>
        <div className="skillitem">MERN STACK DEVELOPMENT: <div className="fullbox"><div className="skill hundred"></div></div></div>
      </div> <br />
      {/*Hobbies*/}
      <h2>Hobbies-</h2>
      <p>❖ Blockchain</p>
      <p>❖ Cricket</p>
    </div>
  )
}
