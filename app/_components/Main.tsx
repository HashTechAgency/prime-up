"use client"
import Image from "next/image";
import { CallButton } from "./CallButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const advantages = [
    {icon : "main-1.svg", text: "Quality Guaranteed"},
    {icon : "main-2.svg", text: "Fast & Reliable"},
    {icon : "main-3.svg", text: "Locally Owned"},
    {icon : "main-4.svg", text: "Flexible Scheduling"},
]

export const Main = () => {
    const mainRef = useRef<HTMLElement>(null);

    useGSAP(() => {
         const isMobile = window.innerWidth < 768;

        gsap.timeline({
            defaults: { 
                ease: "power3.inOut", 
                duration: 2,
            }
        })
        .to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0})
        .from('#home .logo', {
            opacity : 0,
            duration : 1,
            y : "40px",
        }, "=-2")
        .from('.left_img', {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        }, "=-2")
        .from('.right_img', {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
        }, "=-2")
        .to('.left_img .overlay, .right_img .overlay', {
            opacity : 1,
            duration : 2.2
        }, "=-1")
        .from('.services_list > li', {
            y : "40px",
            opacity : 0,
        },"=-2")
        .from('.discount_list > li', {
            y : "40px",
            opacity : 0,
            duration : 2
        },"=-1.9")
        .from('main .p-button', {
            y : "40px",
            opacity : 0,
            stagger : 0.2,
            duration : 1.5
        },"=-2")
        .from('.main-bg-1', {
            x : '-100%'
        }, "=-2")
        .from('.main-bg-2', {
            x : '100%'
        }, "=-2")
        .to('.advantages  li', { 
            y: 0, 
            opacity : 1,
            duration : 1  
        },"=-1.4")
        .from('.advantages  li img',{
            opacity : 0,
            scale : .5,
            stagger : .1,
            duration : .6
        }, "=-1.3")
        
    
    });
    
 
    return (
        <main id="home" ref={mainRef} className="relative overflow-hidden px-[16px] pb-[61px] flex gap-[49px]">
            <div className="max-lg:hidden max-2xl:w-[300px] max-2xl:h-[700px] rounded-[24px] overflow-hidden left_img h-[836px]">
                <Image className="w-full h-full object-cover" width={412} height={836} src={'/img/main-1.png'} alt=""/>
                <div className="overlay"/>
            </div>
            <div className="grow-1 text-center pt-[24px] sm:pt-[48px] 2xl:pt-[62px]">
                <div className="logo flex flex-col items-center mb-[32px]">
                    <Image width="250" height="32" src='/svg/logo.svg' alt="Logo"/>
                    <h3 className="text-white text-[18px]">Lic. # PRIMEUL753MB</h3>
                </div>

                <ul className="services_list mb-[24px] text-center ">
                    {["Maintenances","Repairs","Improvements"].map((s,i) => (
                        <li className="max-sm:!text-[14px] max-2xl:text-[18px]" key={i}>{s}</li>
                    ))}
                </ul>

                <h1 className="text-[32px] sm:text-[48px] 2xl:text-[64px] text-white font-extrabold leading-[40px] sm:leading-[54px] 2xl:leading-[76px] max-w-[673px] mx-auto">
                    Need improvement or repair your home? we can help!
                </h1>

                <ul className="discount_list flex justify-center gap-[24px] sm:gap-[45px] mt-[24px]">
                    {['Free Quotes','100% Commitment-Free '].map((d,i) => (
                        <li className="max-sm:!text-[14px] max-2xl:text-[16px]" key={i}>{d}</li>
                    ))}
                </ul>

                <CallButton className="mx-auto max-sm:!mt-[24px]"/> 

                <ul className="advantages mt-[39px] sm:mt-[152px] flex justify-center gap-[24px] 2xl:gap-[32px] relative">
                    {advantages.map((a,i) => (
                        <li className="flex items-center gap-[24px] 2xl:gap-[32px]" key={i}>
                            <Image src={`/svg/${a.icon}`} width={48} height={48} alt=""/>
                            <span className="font-semibold max-w-min text-[16px] 2xl:text-[18px] text-white text-start">{a.text}</span>
                        </li>
                    ))}

                    <hr style={{
                        borderImage : "linear-gradient(270deg, rgba(78, 101, 182, 0) -8.63%, #4E65B6 50.54%, rgba(78, 101, 182, 0) 104.98%) 1;"
                    }} className="lg:hidden top-[50%] translate-y-[-50%] left-0 right-0 absolute "/>
                                  <hr style={{
                        borderImage : "linear-gradient(180deg, rgba(79, 102, 183, 0) 0%, #4F66B7 49.57%, rgba(79, 102, 183, 0) 103.46%) 1;"
                    }} className="lg:hidden left-[50%] translate-x-[-50%] top-0 bottom-0 absolute h-full border-r"/>
                </ul>
            </div>
            <div className="max-lg:hidden max-2xl:w-[300px] max-2xl:h-[700px] rounded-[24px] overflow-hidden right_img h-[836px]">
                <Image className="w-full h-full object-cover" width={412} height={836} src={'/img/main-2.png'} alt=""/>
                <div className="overlay"/>
            </div>


            <Image className="main-bg-1 absolute bottom-0 left-[-300px] lg:left-[-120px] 2xl:left-0" width={481} height={45} src={'/img/main-bg-el-1.png'} alt=""/>
            <Image className="main-bg-2 absolute bottom-0 right-[-300px] lg:right-[-120px] 2xl:right-0" width={481} height={45} src={'/img/main-bg-el-2.png'} alt=""/>
        </main> 
    )
}  

