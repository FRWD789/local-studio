import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


type LoadingScreenProps = {
  onFinish: () => void;
};


function LandingScreen({ onFinish }: LoadingScreenProps) {
    const loaderRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const tl = gsap.timeline({
      onComplete: onFinish, // called when animation finishes
    });
      tl.to(loaderRef.current, { opacity: 1, duration: 0.5 })
      .to(loaderRef.current, { opacity: 1, duration: 1, repeat: 1, yoyo: true })
      .to(loaderRef.current, { opacity: 0, duration: 0.5 });

    },{  dependencies: [onFinish], scope: loaderRef})

  return (
    <div 
        ref={loaderRef}
        className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <h1 className="text-4xl font-bold">Loading...</h1>

    </div>
  )
}

export default LandingScreen