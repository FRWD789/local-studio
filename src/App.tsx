import React from 'react'
import Layout from './layouts/Layout'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import InfintVideo from './components/InfintVideo';
export default function App() {
  const container = useRef(null);
  return (
    <Layout>
      
      <InfintVideo src='videos/RPK_Reel_FR_short_V3_compress.mp4'/>
    </Layout>
  )
}
