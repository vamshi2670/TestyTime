import React from 'react'
import icon from './images/doc.png'
import imgage from './images/pic1.png'
import mycv from './images/Vamshi_CV.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Home() {
  function downloadcv(){

  }
  return (
    <>
    <div id='container'>
      <div id='home'>
        <h1>Hi ,</h1>
        <h1>I'am <span  className="text-primary">Vamshi</span></h1>
        <h1>Web Designer</h1>
        <a href="images\Vamshi_CV.jpg" download={mycv}>
        <button onClick={downloadcv()} id='btn-cv' className='btn btn-primary'>
          
        <img src={icon} alt="icon"
         style={{ width: '24px', height: '24px', color:'white' }}
        />
         Download Cv</button></a>
      </div>
      <div className='profile-container'>
      <div id="myimage">
        <img src={imgage} alt="image" className='profile-img'
        style={{width:"300px" ,height:"300px"}}
        />
      </div>
      </div>

      
  </div>
  <div id='links' style={{ display: 'flex', gap: '20px', fontSize: '23px' }}>
      <a href="https://github.com/vamshi2670/vamshi2670" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/vamshi-bathula-003537287/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </>
  )
}

export default Home