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



  return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children as any}</ReactLenis>;
};  

export default LenisScrollProvider;