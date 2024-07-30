import React, { useRef } from 'react'
import './contact.css'
import Bajaj from '../../assets/bajajfin.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kh9zi1o', 'template_tv0tlyg', form.current,
                'GsUFi1EdZ3ZnaqUQFjWMx'
            )
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent')
                console.log('SUCCESS!');
            },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='contact_page'>
            <div id='clients'>
                <h1 className='client_title'>Our Clients</h1>
                <p className='client_desc'>
                    I have worked with a variety of clients, from small businesses to large corporations.Benefits of freelancing include the freedom to work from home or from a non-traditional workspace, a flexible work schedule, and a better work/life balance.
                </p>
                <div className='client_imgages'>
                    <img src={Bajaj} alt='client4' className='client_img' />
                    <img src={Bajaj} alt='client4' className='client_img' />
                    <img src={Bajaj} alt='client4' className='client_img' />
                    <img src={Bajaj} alt='client4' className='client_img' />
                </div>
            </div>




            <div id='contact'>
                <h1 className='contact_title'>Contact Me</h1>
                <p className='contact_desc'>
                    I am always open to new opportunities and challenges. If you have a project that you would like
                </p>
                <form className='contact_form' ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' className='name' name='your_name' />
                    <input type='email' placeholder='Email' className='email' name='ypur_email' />
                    <textarea placeholder='Message' rows={5} className='message' name='message'></textarea>
                    <button type='submit' value='Send' className='submit'>Send</button>
                    <div className='social_links'>
                        <img src={Facebook} alt='facebook_icon' className='s_link' />
                        <img src={Instagram} alt='insta_icon' className='s_link' />
                        <img src={Twitter} alt='twittr_icon' className='s_link' />
                        <img src={Linkedin} alt='linkedin_icon' className='s_link' />
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact
