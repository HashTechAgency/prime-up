import Image from "next/image";
import React from "react";

const data = [
  {
    title: (
      <>
        Free <br /> Estimate
      </>
    ),
    text: "On-site evaluation and project discussion.",
  },
  {
    title: (
      <>
        Clear Scope <br />& Pricing
      </>
    ),
    text: "Defined scope, materials, and transparent pricing.",
  },
  {
    title: (
      <>
        Sheduled <br /> start date
      </>
    ),
    text: "Agreed timeline and start date.",
  },
  {
    title: (
      <>
        Professional <br /> Execution
      </>
    ),
    text: "Licensed, code-compliant work performed.",
  },
  {
    title: (
      <>
        Final
        <br /> Walkthrough
      </>
    ),
    text: "Review, comletion, and close-out.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="wrapper py-[50px]">
      <h2 className="s-title text-center mb-[30px]">How It Works</h2>

      <div className="bg-white shadow-xl rounded-[10px] p-[40px] max-w-[1040px] max-w-full">
        <div className="flex justify-center max-sm:flex-col items-center flex-wrap gap-[10px]">
          {data.map((d, i) => (
            <React.Fragment key={i}>
              <div
                key={i}
                className="flex-[1_1_200px] flex flex-col items-center"
              >
                <div className="relative text-white bg-(--blue) rounded-full py-[10px] px-[20px] font-bold text-[20px]">
                  {i + 1}

                  {i !== data.length - 1 && (
                    <Image
                      className="max-sm:hidden absolute right-[-180%] top-1/2 -translate-y-1/2 "
                      width={80}
                      height={50}
                      src="/svg/arrow-long.svg"
                      alt=""
                    />
                  )}
                </div>
                <h3 className="text-[20px] text-(--dark-blue) font-bold my-[10px] text-center leading-[24px]">
                  {d.title}
                </h3>

                <p className="text-center text-[16px]">{d.text}</p>
              </div>

              {i !== data.length - 1 && (
                <Image
                  className="sm:hidden rotate-90"
                  width={80}
                  height={50}
                  src="/svg/arrow-long.svg"
                  alt=""
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <hr
          className="
  border-none 
  h-[2px] 
  mt-10 
  bg-[linear-gradient(90deg,transparent,var(--grey-800)_20%,var(--grey-800)_80%,transparent)]
"
        />
      </div>
    </div>
  );
};
