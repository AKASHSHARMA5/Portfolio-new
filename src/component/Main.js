import React from 'react'
import akash from "./developerimg.png"
import pdf from './Resume-Akash sharma.pdf'
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
                        <div className="moreabout">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, corrupti debitis enim explicabo, quasi praesentium porro, eaque asperiores repellat iure ab. Commodi, fuga atque dignissimos quis at reiciendis labore perferendis.</div>
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
