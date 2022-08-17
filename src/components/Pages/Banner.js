import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import '../Style/Banner.css'
import {motion} from 'framer-motion'
const Banner = () => {

    const showVariants={
        show:{
            opacity:1,
            transition:{
                delay:0.3,
                duration:2,
                ease: "linear" 
            }
        },
        hide:{
            opacity:0,
            transition:{
                delay:0.3,
                duration:2
            }
        }
    }

    const btnVariants={
        show:{
            x:0,
            transition:{
                delay:1,
                duration:0.5,
                ease: "linear" ,
                type:'spring',
                stiffness:220
            }
        },
        hide:{
            x:1000,
            transition:{
                delay:1,
                duration:1
            }
        }
    }
    return (
        <div>
            <div className='banner'>
                <Container className='w-100 h-100'>
                    <motion.div
                    variants={showVariants}
                    initial='hide'
                    animate='show'
                    className='d-flex justify-content-center align-items-center flex-direction-column  h-100'>
                        <div className='text-white text-center'>
                            <h1 className='display-5 fw-bold'>WHAT’S ON <span className='primary-text-color'>TODAY</span></h1>
                            <h2 className='fs-4 lh-lg fst-italic'>AT MOVIEZONE CINEMA & THEATRES!</h2>
                            <p className='text'>All reserved seating – Choose your exact seat!</p>
                            <motion.button 
                            variants={btnVariants}
                            className='rounded-pill px-4 py-2 text-uppercase text-white fw-bold  r-btn'>Discover Now!</motion.button>
                        </div>
                    </motion.div>
                </Container>
            </div>
        </div>
    );
};

export default memo(Banner);