import React from 'react'
import './work.css'
import Port1 from '../../assets/work-1.png'
import Port2 from '../../assets/work-2.png'
import Port3 from '../../assets/work-3.png'
import Port4 from '../../assets/work-4.png'
const Work = () => {
    return (
        <section id='works'>
            <h2 className='work_tile'>My Portfolio</h2>
            <p className='work_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur rem aliquid iure adipisci veritatis quia, eveniet eum? Enim molestias cupiditate minus qui nemo dolor, veniam beatae dolorum consectetur? Harum.</p>
            <div className='works_img'>
                <img src={Port1} alt='work1' className='work_img' />
                <img src={Port2} alt='work1' className='work_img' />
                <img src={Port3} alt='work1' className='work_img' />
                <img src={Port4} alt='work1' className='work_img' />
                <img src={Port3} alt='work1' className='work_img' />
                <img src={Port2} alt='work1' className='work_img' />
            </div>
            <button className='work_btn'>See More</button>
        </section>
    )
}

export default Work
