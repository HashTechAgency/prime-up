"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import Image from "next/image";


const steps = [
    {title : "Call us anytime 24/7", text : "You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime"},
    {title : "Schedule Service", text : "After connecting your call, our home care experts will answer your questions and provide flexible appointment times"},
    {title : "Your request is complated", text : "Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work"},
]
export const WorksStepSection = () => {

    useGSAP(() => {
        gsap.from('#worksstep .worksstep_box', {
            scrollTrigger : {
                trigger: '#worksstep .worksstep_box',       
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

         gsap.from('#worksstep .worker_img', {
            scrollTrigger : {
                trigger: '#worksstep .worker_img',       
                start: "top 70%",     
                end: "bottom 25%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            opacity : 0,
            duration : 1,
            ease: "elastic.out",
        });

        gsap.from('#worksstep .guarantee-icon', {
            scrollTrigger : {
                trigger: '#worksstep .guarantee-icon',       
                start: "top 70%",     
                end: "bottom 25%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            opacity : 0,
            scale : .4,
            duration : 1,
            ease: "elastic.out",
        });
    });

    return (
        <section id="worksstep">
            <div className="wrapper flex-wrap max-sm:justify-center py-[32px] sm:py-[158px] flex gap-[24px] sm:gap-[88px]">
                <div className="relative">
                    <Image 
                      style={{
                            clipPath: 'inset(0 0 30px 0)'
                        }}
                    className="worker_img absolute bottom-[-30px] right-[5px] z-[1] sm:right-[60px]" src={'/img/guarantee-woker.png'} width={703.17} height={576.56} alt=""/>
                    <Image className="guarantee-icon w-[22%] top-[35%] right-[15%] absolute z-[2]" width={150} height={150} src="/img/guarantee-icon.png" alt=""/>
                    <Image className="max-2xl:w-[541px]" src={'/img/worksstep-bg.png'} width={641} height={617} alt=""/>
                </div>

                <div>
                    <h2 className="s-title max-w-[200px] sm:max-w-[438px]">How “Company” works?</h2>
                    <div className="flex flex-col gap-y-[24px] sm:gap-y-[52px] mt-[24px] sm:mt-[60px]">
                        {steps.map((s, i) => (
                            <div className="worksstep_box flex max-sm:flex-wrap gap-[12px] sm:gap-[36px] items-start" key={i}>
                                    <div className="basis-[240px] flex items-center gap-[24px]">
                                        <span className="text-[52px] text-(--grey) font-bold">{i+1}.</span>
                                        <h3 className="text-(--black) text-[24px] leading-[32px] font-semibold sm:font-bold">{s.title}</h3>
                                    </div>
                                    <p className="text-[18px] leading-[28px] text-(--grey-1) max-w-[420px]">{s.text}</p>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
        </section>
    )
}