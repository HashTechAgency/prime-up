"use client"
import Image from "next/image"
import gsap from 'gsap'
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"

const guarantees = [
        {
            title : "Satisfaction Guarantee", 
            text : "you don't need to worry about scams or our performance results. our company has been verified and strives for optimal results", 
            img : "guarantee-1.svg"
        },
        {
            title : "Free Quotes", 
            text : "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.", 
            img : "guarantee-2.svg"
        },
        {
            title : "Local Professionals", 
            text : "Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance",
            img : "guarantee-3.svg"
        },
        {
            title : "Fast 24-Hour Service", 
            text : "Need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem", 
            img : "guarantee-4.svg"
        },
        {
            title : "Flexible Appointments", 
            text : "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.", 
            img : "guarantee-5.svg"
        },
        {
            title : "100% Commitment-Free", 
            text : "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease", 
            img : "guarantee-6.svg"
        }, 
]

export const GuaranteeSection = () => { 

    
    useGSAP(() => {
        gsap.from('#guarantee .guarantee_box', {
            scrollTrigger : {
                trigger: '#guarantee .guarantee_box',       
                start: "top 70%",     
                end: "bottom 25%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            opacity : 0,
            y : -30,
            duration : 1.1,
            stagger : 1,
            ease: "sine.inOut",
        });

        gsap.from('#guarantee hr', {
            scrollTrigger : {
                trigger: '#guarantee hr',       
                start: "top 85%",     
                end: "bottom 25%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            width : 0,
            ease: "power2.out",
        })

        gsap.from('#guarantee .left-bg-el', {
            scrollTrigger : {
                trigger: '#guarantee .left-bg-el',       
                start: "top 60%",     
                end: "bottom 95%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            x : '-100%',
            ease: "power2.in",
        })

        gsap.from('#guarantee .right-bg-el', {
            scrollTrigger : {
                trigger: '#guarantee .left-bg-el',       
                start: "top 60%",     
                end: "bottom 95%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            x : '100%',
            ease: "power2.in",
        })

    });

    return (
        <section id="guarantee" className="px-[24px] lg:px-[32px] 2xl:px-[60px] py-[26px]">
            <div className="bg-(--dark-blue) overflow-hidden py-[64px] rounded-[24px] relative">

                <div className="max-w-[1490px] px-[32px] lg:px-[84px] 2xl:px-[70px] mx-auto">
                    <div className="max-lg:flex-wrap max-lg:gap-[12px] flex items-end">
                        <h2 className="max-lg:text-center max-lg:basis-full flex-[1_1_200px] s-title !text-white">Fast, Friendly, and <br/>Satisfaction Guarantee</h2>

                        <div className="max-lg:basis-full flex-[1_1_200px]">
                            <p className="s-text max-lg:text-center !text-(--grey) max-lg:max-w-full lg:ml-auto">No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.</p>
                        </div>
                    </div>

                    <hr style={{
                        borderImage : "linear-gradient(270deg, rgba(78, 101, 182, 0) -8.63%, #4E65B6 50.54%, rgba(78, 101, 182, 0) 104.98%) 1;"
                    }} className="my-[52px] sm:my-[60px] mx-auto"/>


                    <div className="flex gap-[20px] max-sm:gap-y-[52px] gap-y-[60px] flex-wrap">
                        {guarantees.map((g,i) => (
                            <div key={i} className="guarantee_box max-lg:flex-wrap max-lg:basis-full max-lg:justify-center flex-[1_1_45%] flex gap-[12px] sm:gap-[32px]">
                                <Image className="max-2xl:w-[80px]" width={100} height={100} src={`/svg/${g.img}`} alt=""/>
                                <div>
                                    <h4 className="max-sm:text-center text-[18px] lg:text-[20px] 2xl:text-[24px] text-white font-bold">{g.title}</h4>
                                    <p className="max-sm:text-center max-w-[496px] text-(--grey) text-[18px] mt-[12px] leading-[28px]">{g.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <img width={45} height={645} className="left-bg-el max-lg:hidden absolute left-0 top-[50%] translate-y-[-50%]" src="/img/guarantee-bg-el-1.png" alt="" />
                <img width={45} height={645} className="right-bg-el max-lg:hidden absolute right-0 top-[50%] translate-y-[-50%]" src="/img/guarantee-bg-el-2.png" alt="" />
            </div>
        </section>
    )
}