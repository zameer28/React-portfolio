import React from 'react'
import './Intro.css'
import bg from '../../assets/user-image.png'
import hire from '../../assets/project-icon.png'
import { Link } from 'react-scroll'


const Intro = () => {
    return (
        <section id='intro'>
            <div className='intro-content'>
                <spna className="hello">Hello</spna>
                <h1 className='into_name'>I'm <span className='intro_name'>Jummy</span></h1>
                <span>FrontEnd Developer</span>
                <p className='into_descp'>Iam a skilled Frontend Developer skilled Frontend <br /> Developer skilled Frontend Developer</p>
                <Link><button className='btn'><img src={hire} alt='hire-icon' className='btnImg'></img>Hire Me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro
