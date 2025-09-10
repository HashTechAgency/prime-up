"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Gallery = () => {

    useGSAP(() => {
        gsap.from('#gallery .swiper_container', {
            scrollTrigger : {
                trigger: '#gallery .swiper_container',       
                start: "top 100%",     
                end: "bottom 100%",   
                toggleActions: "play none none reverse", 
                scrub: 0.5,         
                markers: false,      
                anticipatePin: 1, 
            },
            opacity : 0,
            y : 60,
            duration : 1,
            ease: "ease.out",
        });
    });


  return (
    <section id="gallery" className="max-lg-[40px] py-[100px]">
      <div className="wrapper">
        <h2 className="s-title text-center">Our Portfolio</h2>
        <p className="s-text mt-[24px] text-center max-w-[552px] mx-auto">
           See the quality of our work and the transformations we've achieved for homeowners just like you.
        </p>

            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                hideOnClick: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container !mt-[60px]"
            >
                {Array.from({length : 16}, (e,i) => (
                <SwiperSlide>
                    <Image width={250} height={300} src={`/img/gallery-${i+1}.jpg`} alt="slide_image"/>
                </SwiperSlide>
                ))}

            <div className="slider-controler max-lg:!hidden !mt-[100px] gap-[10px]">
                <div className="swiper-button-prev slider-arrow">
                    <Image src={'/svg/arrow-left.svg'} width={30} height={30} alt=""/>
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-next slider-arrow">
                    <Image src={'/svg/arrow-right.svg'} width={30} height={30} alt=""/>
                </div>
            </div>
            </Swiper>
      </div>
    </section>
  );
};
