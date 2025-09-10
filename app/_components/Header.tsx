"use client"
import Image from "next/image"
import Link from "next/link"
import { forwardRef, useEffect, useRef, useState } from "react"
import gsap from "gsap"


const links = [
    {title : 'About Us', href : '#about'},
    {title : 'Services', href : '#servies'},
    {title : 'Why choose us', href : '#why-choose-us'},
    {title : 'Contact', href : '#contact'},
]

export const Header = () => {
    const [menu,setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let tl = gsap.timeline({
            defaults: { 
                ease: "power3.inOut", 
                duration: 1
            }
        });

        tl.from("header", {
            y : -100,
            opacity : 0
        });

    }, [])

    useEffect(() => {
        if (menu) {
            gsap.to(menuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            gsap.to(menuRef.current, {
                x: 300,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            });
            
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    if (overlayRef.current) {
                        overlayRef.current.style.display = 'none';
                    }
                }
            });
        }
    }, [menu]);

    return (
        <>
        <header className="responsive flex items-center justify-between p-[12px_24px] lg:p-[24px_80px] 2xl:p-[24px_160px] ">
            <Image width="149" height="32" src='/svg/logo.svg' alt="Logo"/>
            <nav className="max-lg:hidden flex items-center gap-[57px]">
                {links.map((link,i) => (
                    <Link key={i} className="text-white text-[16px] 2xl:text-[18px] font-bold" href={link.href}>{link.title}</Link>
                ))}
            </nav>

            <span className="max-lg:hidden font-bold text-white flex items-center gap-[10px]">
                <div className="rounded-full w-[12px] h-[12px] bg-[#5eff5e]"/>
                24 Hour Services
            </span>

            <svg onClick={() => setMenu(true)} className="sm:hidden cursor-pointer" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.76367 12H21.7637" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.76367 6H21.7637" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.76367 18H21.7637" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </header>
    
        
            <MenuBar ref={menuRef} close={() => setMenu(false)}/>
            <div 
                ref={overlayRef}
                className="fixed inset-0 bg-[#0A133580] z-[999] opacity-0"
                style={{ display: menu ? 'block' : 'none' }}
                onClick={() => setMenu(false)}
            />
    
        </>
    )
}

const MenuBar = forwardRef<HTMLDivElement, {close : () => void}>(({close},ref) => {
    return (
        <div ref={ref} className="opacity-0 translate-x-[300] pb-[36px] flex flex-col fixed top-0 botton-0 right-0 w-[272px] z-[1000] bg-[#142257] h-screen z-[1000]">
            <div className="border-b border-b-[#1F3584] flex gap-2 justify-between items-center p-[16px_8px_16px_24px]">
                <Image width="109" height="32" src='/svg/logo.svg' alt="Logo"/>
                <Image onClick={() => close()} className="cursor-pointer" width="24" height="24" src='/svg/close.svg' alt=""/>
            </div>

            <nav className="flex flex-col text-center">
                {links.map((link,i) => (
                        <Link key={i} className="transition hover:bg-[#0D213A] p-[32px_10px] text-white text-[18px] font-bold" href={link.href}>{link.title}</Link>
                    ))}
            </nav>

            <span className="mx-auto mt-auto font-bold text-white flex items-center gap-[10px]">
                <div className="rounded-full w-[12px] h-[12px] bg-[#5eff5e]"/>
                24 Hour Services
            </span>
        </div>  
    )
})