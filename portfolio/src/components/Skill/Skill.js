import React from 'react'
import './Skill.css'
import graphics from '../../assets/graphics-icon.png'
import mobile from '../../assets/mobile-icon.png'
import web from '../../assets/web-icon.png'

const Skill = () => {
    return (
        <section id='skills'>
            <h3 className='skill_title'>What I do</h3>
            <p className='skill_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusand Lorem ipsum dolor  consectetur adipisicing elit. Recusand Lorem ipsum sit amet consectetur adipisicing elit. Recusand  consectetur adipisicing elit. Recusand Lorem ipsum   consectetur adipisicing elit. Recusand Lorem ipsum</p>
            <div className='skill_bars'>
                <div className='skill_bar'>
                    <img src={graphics} alt='graphics' className='skill_img' />
                    <div className='skill_text'>
                        <h2>Graphics Design</h2>
                        <p>This is Dummy text place your oroginal text</p>
                    </div>
                </div>
                <div className='skill_bar'>
                    <img src={mobile} alt='mobile' className='skill_img' />
                    <div className='skill_text'>
                        <h2>Mobile Development</h2>
                        <p>This is Dummy text place your oroginal text</p>
                    </div>
                </div>
                <div className='skill_bar'>
                    <img src={web} alt='web' className='skill_img' />
                    <div className='skill_text'>
                        <h2>Web Development</h2>
                        <p>This is Dummy text place your oroginal text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
