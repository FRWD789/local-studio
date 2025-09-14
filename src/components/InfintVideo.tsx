import React from 'react'



 type InfintVideoProps = {
    src: string;
 }
function InfintVideo({src}: InfintVideoProps) {

  return (
    <div className="w-full relative overflow-hidden aspect-video"> 
      <video
        className="absolute top-0 left-0 w-full h-full object-contain"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
    
      
  )
}

export default InfintVideo