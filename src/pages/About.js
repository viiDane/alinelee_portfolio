import React, { useContext } from 'react';
import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return ( 
  <motion.section
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='section'>
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='container mx-auto h-full relative'>
      <div className=' flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
       <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
         <img src={WomanImg} alt='' />
       </div>
       <motion.div
        initial={{opacity: 0, y: '-80%'}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: '-80%'}}
        transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About Me</h1>
          <p className='mb-12 max-w-sm'>
          I would like to bring to your attention that, due to the privacy and confidentiality of the client, I am unable to provide any personal details, photos, or any other kind of information related to the client. As part of our commitment to safeguarding the clients privacy, it is essential to maintain strict confidentiality in all our dealings.
          </p>
          <Link to={'/portfolio'} className='btn'>View My Work</Link>
        </motion.div>
     </div>
    </div>
  </motion.section>
    );
};

export default About;
