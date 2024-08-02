import React from 'react'
import akash from "./developerimg.png"
//import pdf from './Resume-Akash sharma.pdf'
//import pdf from './ResumeAkash.pdf'
import pdf from './ResumeAkashSharma.pdf'

// import hambur from './hamburger.png'
// import cross from './cross.png'
// import Hamburg from './Hamburg'
// import ellipse from './ellipse.png'


export default function Home(props) {
    //const [mycross,setcross]=useState('');

    const contactme=(e)=>{
        e.preventDefault();
        document.location='/contact';
    }
    const resume=(e)=>{
        e.preventDefault();
        document.location.href=pdf;
    }
    return (
        <div className='container'>
            <div className="main">
                <div className="infocontainer">
                    <div id="akashinfo" className="devinfo">
                        <div className="hello">My Name is</div>
                        <div className="name">Akash Sharma</div>
                        <div className="about">Programmer,Mern stack developer</div>
                        <div className="moreabout">As a MERN Stack Developer, I excel in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I am skilled in developing dynamic, responsive interfaces with React.js and creating scalable server-side applications with Node.js and Express.js. Additionally, I have strong expertise in designing and managing databases with MongoDB, ensuring high-quality, maintainable, and scalable solutions.</div>
                        <div className="buttons">
                            <button onClick={resume}>Download CV</button>
                            <button onClick={contactme}>Contact me</button>
                        </div>
                    </div>
                    <div className="devimg"><img src={akash} alt={props.altimg} /></div>
                </div>
            </div>
        </div>

    )
}
