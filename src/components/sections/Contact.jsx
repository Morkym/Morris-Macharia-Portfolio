import React from 'react'
import { useState,useRef } from 'react'
import ContactExperience from '../ContactExperience'
import { findMe } from '../constants';
import emailjs from '@emailjs/browser';
import TitleHeader from '../TitleHeader';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const[loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        console.log('public key:', import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY);
        console.log('service id:', import.meta.env.VITE_APP_EMAIL_SERVICE_ID); 
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
                import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY,
                
            )
            setFormData({
            name: '',
            email: '',
            message: '',
            })
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Email js error:', error);
            
        }finally {
            setLoading(false)
        }
       
    };

  return (
    <>
    <div className='w-full mt-20 h-full md:px-10 px-0   mx-0'>
        
        <TitleHeader title='Get In Touch' />
    </div>
        
    
    <section id='contact' className='flex-center  section-padding mt-0 px-0'>
    
         
        <div className='w-full h-full md:px-10 px-5 flex-auto'>
        
        
            <div className='mt-13 grid-12-cols '>
                {/*Left  side*/ }
                <div className="xl:col-span-7 min-h-96 ">
                    <div className="w-full h-full bg-gray-800 p-8 rounded-3xl">
                        <h2 className="text-white-50 text-2xl font-bold mb-6">Talk to me</h2>
                            <form onSubmit={handleSubmit}  className="flex flex-col gap-4 pb-0" ref={formRef}  >
                                <div>
                                    <label htmlFor="name" className="text-white block mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        name="name"
                                        className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                        <label htmlFor="email" className="text-white block mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="Enter your email"
                                        />
                                </div>
                                <div>
                                        <label htmlFor="message" className="text-white block mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            placeholder="Enter your message"
                                        ></textarea>
                                </div>
                                
                                    <button
                                            type="submit"
                                            className="w-full bg-white-50 text-black py-3 rounded-lg hover:bg-amber-600 transition duration-300"
                                            disabled={loading}
                                            >
                                            <p className='text'>{loading? 'sending':'send'}</p>
                                    </button>
                            </form>
                    
                    </div>
                </div>
                   
                
                {/*Right side*/ }
                 
            <div className='xl:col-span-5 min-h-96 '>
                    <div className='w-full h-full bg-transparent hover:cursor-grab overflow-hidden rounded-3xl'>
                        <ContactExperience />

                    </div>
            </div>
            </div>
        </div>
    
    </section>
    </>
  );
};

export default Contact