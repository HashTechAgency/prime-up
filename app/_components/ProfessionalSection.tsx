"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "./icons";

// export const PorsfessionalSection = () => {

//     useGSAP(() => {

//         gsap.from('#about ul li', {
//             scrollTrigger : {
//                 trigger: '#about ul li',
//                 start: "top 70%",
//                 end: "bottom 25%",
//                 toggleActions: "play none none reverse",
//                 scrub: 0.5,
//                 markers: false,
//                 anticipatePin: 1,
//             },
//             opacity : 0,
//             x : -30,
//             duration : 1.1,
//             stagger : 1
//         });

//         gsap.from('#about img', {
//             scrollTrigger : {
//                 trigger: '#about ul li',
//                 start: "top 90%",
//                 end: "bottom 25%",
//                 toggleActions: "play none none reverse",
//                 scrub: 0.5,
//                 markers: false,
//                 anticipatePin: 1,
//             },
//             opacity : 0,
//             x : 30,
//             duration : 1.1,
//         });
//     });

//     return (
//         <section id="why-choose-us">
//             <div className="wrapper max-sm:flex-wrap-reverse max-sm:justify-center flex items-center justify-between gap-[32px] 2xl:gap-[20px] mt-[30px] 2xl:mt-[60px] lg:pt-[100px] 2xl:pt-[168px]  pb-[32px] sm:pb-[64px]">

//                 <div className="max-w-[561px]">
//                     <h2 className="s-title">Why choose us?</h2>
//                     <p className="s-text mt-[24px]">You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services</p>

//                     <ul className="mt-[32px] sm:mt-[56px] flex flex-col gap-y-[24px] sm:gap-y-[32px]">
//                         {[
//                             "Fast & Reliable – We respond quickly and get the job done right the first time.",
//                             "Wide Range of Home Services – From appliance repair to painting, decks, siding, and more.",
//                             "Quality Work Guaranteed – Professional results with attention to detail.",
//                             "Fair & Transparent Pricing – Clear estimates, no hidden costs",
//                             "Locally Owned – Serving our community with care and trust.",
//                         ].map((t, i) => (<li className="max-sm:!text-[16px] max-2xl:!text-[18px]" key={i}>{t}</li>))}
//                     </ul>

//                 </div>

//                 <div className="relative">
//                     <Image className="max-2xl:w-[612px]" width={712} height={700} src={'/img/about.png'} alt=""/>
//                     {/* <p className="absolute bottom-[-40px] left-[50%] translate-x-[-50%] mx-auto text-[18px] text-white p-[12px_32px] rounded-[24px] bg-(--blue) leading-[28px] w-[450px]">
//                         We already 24 hours fast services to help you. You can contact us at  <a className="text-[20px] font-semibold underline" href="">(000) 000-0000</a>
//                     </p> */}
//                 </div>
//             </div>
//         </section>
//     )
// }

export const PorsfessionalSection = () => {
  return (
    <div className="py-[40px] relative bg-[url('/img/worker.jpeg')] bg-no-repeat bg-cover bg-right">
      <div
        style={{
          background: `linear-gradient(
140deg, #131f4b 14.15%, rgba(19, 31, 75, 0) 72.25%)`,
        }}
        className="absolute w-full h-full inset-0"
      />
      <div className="wrapper z-1 relative">
        <h2 className="s-title !text-white">Why PRIME UP?</h2>

        <ul className="mt-[30px]">
          {[
            "Licensed Residential & Comercial Contractor (WA)",
            "Bonded & Insured",
            "Code-compliant work",
            "Clear contract & scopes",
            "Local Washington projects",
          ].map((s, i) => (
            <li
              key={i}
              className="text-white text-[16px] sm:text-[20px] mt-[20px] before:content-[url('/svg/checkbox.svg')] before:align-sub before:mr-[10px]"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="flex gap-[10px] mt-[30px]">
          <Link className="p-button !rounded-[8px]" href="">
            <span className="max-sm:hidden">Request</span> Free Estimate
          </Link>
          <Link className="p-button !rounded-[8px] secondary gap-[10px]" href="">
            <PhoneIcon className="max-sm:hidden text-(--blue)" />
            Call Now
          </Link>
        </div>
      </div>
    </div>
  );
};
