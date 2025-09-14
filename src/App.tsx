import React from 'react'
import Layout from './layouts/Layout'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
export default function App() {
  const container = useRef(null);
  return (
    <Layout>
      <div ref={container} className="flex flex-col   items-center justify-center h-screen" >
        <div className='bg-red-400 min-h-full flex-1 min-w-full'>

        </div>

      </div>
      

    </Layout>
  )
}
