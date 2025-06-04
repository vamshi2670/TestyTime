import React from 'react'
import myimage from './images/myimage.JPG'
import { motion } from 'framer-motion'
function About() {
  return (
    <div id='about'>
        <div id='about-container'>
        <h1 id='about-text ' className='text-primary'>About</h1>
        <div id='about-img'>
                <motion.img src={myimage} alt="my image" 
                style={{width:"300px", height:'300px'}}
                initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

                />
                <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} >
                <p id='about-me' >
                    Hi! I'm vamshi, i'm belongs to khammam at teldarpalli village.
Iam a passionate web developer with a knack for creating dynamic and responsive websites.
I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks. I graduated from Sr&bgnr collage with a degree in B.com where
I developed a strong foundation in software development and user experience .
I led several projects that significantly improved the company's online presence and user engagement.
Apart from coding, I enjoy hiking, photography, and exploring new technologies.
I'm always eager to learn and take on new challenges.

If you're looking for a dedicated and skilled developer to bring your project to life,
feel free to contact me. Let's create something amazing together!
                </p>
                </motion.div>
        </div>
        </div>
    </div>
  )
}

export default About