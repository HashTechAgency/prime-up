"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

const services = [
    {
        title : "Home Remodeling",
        text : `Full House • Bathnoons • Additions
        `,
        img : "home-outline.svg"
    },
    {
        title : "Decks & Pergolas",
        text : "Custom dectis • Coverad dests • Pergolas",
        img : "nextcloud-deck.svg"
    },
    {
        title : "Siding",
        text : "James Hecle • UP SmarcSide • Repairs",
        img : "picnic-desk.svg"
    },
    {
        title : "Fences",
        text : `Wood • Privacy • Replacement`,
        img : "garden-fence.svg"
    },
    {
        title : "Interior & Exterior Painting",
        text : `Full repaint • Trim`,
        img : "paintbrush.svg"
    },
    {
        title : "Fences",
        text : "Replacement",
        img : "garden-fence.svg"
    },
    {
        title : "Roof Leak Repairs",
        text : "Flashing • Leaks",
        img : "drop-fill.svg"
    },
]

// export const ServicesSection = () => {
//     useGSAP(() => {
//         gsap.from('#services .service_box', {
//             scrollTrigger : {
//                 trigger: '#services .service_box',
//                 start: "top 100%",
//                 end: "bottom 25%",
//                 toggleActions: "play none none reverse",
//                 scrub: 0.5,
//                 markers: false,
//                 anticipatePin: 1,
//             },
//             opacity : 0,
//             y : 40,
//             duration : 1.5,
//             stagger : 0.3,
//             ease: "ease.out",
//         });

//         gsap.from('#services .service_box img', {
//             scrollTrigger: {
//                 trigger: '#services',
//                 start: "top 75%",
//                 end: "bottom 25%",
//                 scrub: 0.9,
//             },
//             scale: 0,
//             opacity: 0,
//             duration: 1.5,
//             stagger: 0.25,
//             delay: 0.5,
//             ease: "back.out(2)",
//             transformOrigin: "center center"
//         });
//     });

//     return (
//         <section id="services">
//             <div className="wrapper py-[32px] sm:py-[120px]">
//                 <h2 className="s-title text-center">Our Services</h2>
//                 <p className="s-text mt-[24px] text-center max-w-[552px] mx-auto">You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!</p>

//                 <div className="flex flex-wrap max-lg:gap-[32px] mt-[32px] sm:mt-[60px]">
//                     {services.map((s,i) => (
//                         <div className="service_box flex-[1_1_300px] 2xl:flex-[1_1_360px] lg:p-[32px]" key={i}>
//                             <div className="mx-auto lg:mx-0 rounded-[16px] 2xl:rounded-[20px] p-[10px] w-[52px] 2xl:w-[64px] h-[52px] 2xl:h-[64px] bg-[#0D213A] grid place-items-center">
//                                 <Image width={40} height={40} src={`/svg/${s.img}`} alt=""/>
//                             </div>

//                             <h3 className="max-w-[300px] text-center max-lg:mx-auto lg:text-start text-(--black) text-[20px] 2xl:text-[24px] font-bold mt-[16px]">{s.title}</h3>
//                             <p className="max-lg:mx-auto max-lg:text-center text-[#545971] text-[18px] max-w-[296px] mt-[12px]">{s.text}</p>
//                         </div>
//                     ))}

//                     {/* <div className="service_box flex-[1_1_300px] 2xl:flex-[1_1_360px] p-[32px] rounded-[24px] bg-(--blue)" >
//                         <h3 className="text-center text-white text-[20px] 2xl:text-[24px] font-bold">
//                             More service?
//                         </h3>
//                         <p className="text-white text-[18px] max-w-[296px] mx-auto text-center mt-[4px]">
//                             You can tell us what you need and we can help!
//                         </p>

//                         <Link href={'tel:+12066122158'} className="p-button !bg-white !text-(--blue) w-full mt-[32px]">
//                             Call Us Now
//                         </Link>
//                     </div> */}
//                 </div>
//             </div>
//         </section>
//     )
// }

export const ServicesSection = () => {
  return (
    <div className="pt-[30px] pb-[80px] wrapper">
      <h2 className="s-title text-center">Our Core Services</h2>

      <div className="flex flex-wrap gap-[20px] justify-center mt-[40px]">

        {services.map((s,i) => (
        <div key={i} className="bg-white shadow flex-[1_1_250px] px-[24px] py-[28px] flex flex-col items-center">
          <Image className="max-sm:w-[60px]" src={'/svg/'+s.img} width={100} height={100} alt="" />
          <h3 className="font-bold text-[20px] text-(--dark-blue) my-[10px]">{s.title}</h3>

         <p className="text-[16px] leading-[24px] text-center text-(--dark-blue)">{s.text}</p>

          <Link className="p-button items-center gap-[10px] !py-[5px] mt-[10px]" href={''}>
          Learn more
          <ChevronRightIcon/>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};
