"use client"
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.s-title').forEach((title, index) => {
        gsap.from(title,{
        scrollTrigger : {
            trigger: title,       
            start: "top 75%",     
            end: "bottom 25%",   
            toggleActions: "play none none reverse", 
            scrub: 0.5,         
            markers: false,      
            anticipatePin: 1,  
        },
        opacity: 0,
        y: 30, 
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    })
    })


    document.querySelectorAll('.s-text').forEach((text, index) => {
        gsap.fromTo(text,
            {
                opacity: 0,
                y: 30,
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
            },
            {
                opacity: 1,
                y: 0,
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                duration: 1.2,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse",
                    scrub: 0.5,
                    markers: false,
                    anticipatePin: 1,
                }
            }

)})
  })

  return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children as any}</ReactLenis>;
};  

export default LenisScrollProvider;