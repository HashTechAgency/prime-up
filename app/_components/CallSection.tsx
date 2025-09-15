import Image from "next/image";
import { CallButton } from "./CallButton";

export const CallSection = () => {
    return (
    <section id="callsection" className="bg-[#0D213A] relative">
        <div className="wrapper relative z-1">
            <div className="pt-[56px] sm:pt-[165px] pb-[37px] sm:pb-[106px]">
                <h2 className="max-sm:mx-auto max-sm:max-w-[269px] max-sm:text-center text-[24px] sm:text-[48px] 2xl:text-[64px] text-white font-bold sm:font-extrabold leading-[32px] sm:leading-[54px] 2xl:leading-[76px] max-w-[662px]">
                    Already to improve or repair your home? Let’s Talk! 
                </h2>

                <ul className="discount_list max-sm:justify-center flex gap-[24px] sm:gap-[45px] mt-[24px]">
                    {['Free Quotes','100% Commitment-Free '].map((d,i) => (
                        <li className="max-sm:!text-[14px]" key={i}>{d}</li>
                    ))}
                </ul>

                <CallButton className="max-sm:mt-[24px] max-sm:mx-auto"/>
            </div>


            <Image className="absolute top-0 left-0" width={581} height={45} src={'/img/call-bg-el-1.png'} alt=""/>
        </div>  
        
        <Image className="max-2xl:w-[766px] sm:absolute right-0 bottom-0 " width={966} height={655} src={'/img/call-worker.png'} alt=""/>
    </section>
    )
}       