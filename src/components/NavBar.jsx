import React, { useEffect,useState } from 'react'
import { navLinks } from './constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY >5;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])
  return (
    
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo flex flex-row gap-1.5 justify-center items-center' href="#Hero">
                <img src="/images/mimiFace.png" alt="" className='w-20 h-20 rounded-full mb-0' />
                
                Morris Macharia
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link,name}) => (
                        <li key={name} className='group'>
                        <a href={link}>
                            <span>{name}</span>
                            <span className='underline'/> 
                        </a>
                        </li>
                    ))}

                    
                </ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
    
    
  )
}

export default NavBar