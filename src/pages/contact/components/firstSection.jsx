
import { useRef } from 'react';
import emailjs from "emailjs-com"

import bgImage from '../../../assets/img/heading-pages-06.jpg'

export const FirstSectionContact = () => {

    const form = useRef();

    // ^^ emailjs :
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('achraf_gasbi', 'template_evu2wpy', form.current, '_Iv6kFj6Qr4fyFzwu',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );



    };
    // ^^ fin emailjs :
    return (
        <>
        <div className='h-[8.5vh]'></div>
        <div  style={{backgroundImage :`url(${bgImage})`, backgroundSize :"cover"}}>
           <p className='text-5xl py-20 text-center text-white'> CONTACT </p>
        </div>
        <div className='flex  justify-center py-24 items-center max-[430px]:flex-col'>
            <div className='mr-10 max-[430px]:m-0 max-[430px]:w-[90vw] '>
                <iframe className='max-[430px]:w-[90vw]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058438495082!2d-7.536426624302653!3d33.6037881733292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1707912594233!5m2!1sfr!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='max-[430px]:w-[90vw] max-[430px]:pt-8'>
                <p className='text-xl max-[430px]:text-2xl max-[430px]:pb-2'>Send us your message</p>
                <div className='  rounded-xl w-[40vw] max-[430px]:w-[100%] flex flex-col backdrop-blur-sm'>
                    <form ref={form} className='flex flex-col p-2 max-[430px]:p-0' onSubmit={sendEmail}>

                        <input className=' mt-4 bg-transparent border-2 rounded  ' placeholder="Name" type="text" name="user_name" />
                        <input className=' mt-4 bg-transparent border-2 rounded  ' placeholder="Email" type="email" name="user_email" />
                        <input className=' mt-4 bg-transparent border-2 rounded  ' type="number" placeholder="phone" name="from_name" />
                        <textarea className=' mt-4 bg-transparent border-2 rounded  h-[20vh]  ' placeholder="Message" type="text" name="message" />
                        <input className='bg-[#222222] mt-4 py-2  w-[30%] text-white rounded-full border-2   ' type="submit" value="Send" />
                    </form>
                </div>
            </div>

        </div>
        </>
    );
};

