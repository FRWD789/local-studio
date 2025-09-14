import React from 'react'
import Layout from './layouts/Layout'
import { useRef } from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import InfintVideo from './components/InfintVideo';
import LandingScreen from './components/LandingScreen';
export default function App() {
   const [loading, setLoading] = useState(true);
  const container = useRef(null);
  return (
    <>


     {loading? <LandingScreen onFinish={() => setLoading(false)} />: (
    
       <Layout>
      
      <InfintVideo src='videos/RPK_Reel_FR_short_V3_compress.mp4'/>
    </Layout>
     )}
   
    </>
   
  )
}
