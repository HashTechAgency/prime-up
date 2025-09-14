import Link from "next/link";
import Image from "next/image";



export const CallButton = ({className}:{className?:string}) => {
    return (
        <Link 
            href="tel:+12066122158"     
            aria-label="Call us now at +1 (206) 612-2158"
            className={"p-button w-fit mt-[48px] items-center gap-[16px] !p-[8px_8px_8px_24px] "+className}>
            <span className="text-[18px] lg:text-[20px] 2xl:text-[24px] font-bold">Call Us Now</span>
            <div className="bg-white rounded-full p-[8px] lg:p-[10px] 2xl:p-[12px] grid place-items-center">
                <Image src="/svg/phone.svg" width={24} height={24} alt=""/>
            </div>
        </Link>
    )
}   