import React, { use, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function NavBar() {

    const navRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        gsap.from(navRef.current!.querySelectorAll('li'), { yPercent: -100, opacity: 0, duration: 0.5, stagger: 0.2 });
    }, { scope: navRef });
  return (
    
     <nav ref={navRef} className='w-full text-xl py-2 '>
        <ul className='flex justify-between items-center  text-white'>
            <li>Local</li>
            <div className='flex gap-8'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </div>
        </ul>
    </nav>
  )
}

export default NavBar