import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const links = [
        {title : 'home', href : '#home'},
        {title : 'Services', href : '#services'},
        {title : 'Testimonials', href : '#testimonials'},
        {title : 'Why choose us', href : '#why-choose-us'},
        {title : 'FAQ', href : '#faq'},
    ]

    const socials = [
      {src : "/svg/instagram.svg", href : "https://www.instagram.com/llcprimeup?utm_source=qr&igsh=cXBnN3Y4eXgzazN6"},
      {src : "/svg/facebook.svg", href : "https://www.facebook.com/share/1Xnrt1HqZM/"},
      {src : "/svg/mail.svg", href : "mailto:llcprimeup@gmail.com"},
      {src : "/svg/whatsapp.svg", href : "https://wa.me/message/FEDFRB6DTVC3J1"},
    ]

  return (
    <footer className="bg-(--blue) pt-[32px] sm:pt-[52px] pb-[32px] mt-auto">
      <div className="wrapper">
        <div className="rounded-[24px] bg-[#4AC9FF] p-[26px_24px] flex gap-[25px] items-center flex-wrap justify-between">
          <div>
            <h4 className="text-[24px] text-white font-bold">
              Stay Connected with Our Newsletter
            </h4>
            <p className="text-[18px] text-white mt-[12px]">
              Subscribe to our newsletter to get more news, promo, or news
              services
            </p>
          </div>

          <div className="basis-full max-w-[512px] bg-white p-[12px] flex rounded-full">
            <input
              className="w-full px-[12px] pl-[16px] text-[18px] text-(--black)"
              type="email"
              placeholder="Enter email address"
            />
            <button className="p-button">Subscribe</button>
          </div>
        </div>

          <div className="mt-[30px] sm:mt-[54px] flex flex-wrap gap-[32px] sm:gap-[98px]">
            <div>
                <Image width="230" height="32" src='/svg/logo.svg' alt="Logo"/>
                <p className="max-w-[460px] mt-[32px] text-white text-[18px]">
                    “Prime Up LLC”  is your premier destination for top-notch smart home service and repair. 
                </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-col gap-[25px]">
                <nav className="flex max-sm:flex-col flex-wrap gap-[12px]">
                    {links.map((link,i) => (
                        <Link key={i} className="w-fit transition hover:underline text-white text-[20px] font-regular capitalize" href={link.href}>{link.title}</Link>
                    ))}
                </nav>

                <div className="flex gap-[24px]">
                    {socials.map((social, i) => (
                    <Link key={i} href={social.href} className="transition hover:scale-120">
                        <Image  width={24} height={24} src={social.src} alt=""/>
                    </Link>
                    ))}
                </div>
            </div>
          </div>
      </div>

      <hr className="border-[#FFFFFF4D] mt-[54px] mb-[32px]"/>

     <p className="flex items-center justify-center gap-3 text-[18px] text-white">
        <span>©{currentYear} </span>
        Prime-Up LLC
        <span>. All rights reserved</span>
     </p>
    </footer>
  );
};
