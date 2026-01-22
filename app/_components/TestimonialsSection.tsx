import { StarIcon } from "./icons/star";

const testimonials = [
  {
    title: "Plumbing help",
    text: "Amazing work and I was super impressed with his flexibility in working around my work schedule and availability! Can't recommend enough.",
    date: "Jul 28, 2025",
  },
  {
    title: "Application Installation & Repairs",
    text: "Great job and work",
    date: "Mar 27, 2025",
  },
  {
    title: "Furniture Assembly",
    text: "I've hired Cholponbek a few times, he always does an excellent job and is very friendly",
    date: "Apr 9, 2025",
  },
  {
    title: "Appliance Installation & Repairs",
    text: "He was really thorough and knowledgeable. We got the answers we needed for a way better price!",
    date: "Apr 15, 2025",
  },
  {
    title: "Sealing & Caulking",
    text: "Good attention ot detail and great communication. Came prepared and worked efficiently. Was even thoughtful enough to suggest a fix for my squeaky dryer on the way out! Thanks!",
    date: "May 29, 2025",
  },
  {
    title: "Plumbing help",
    text: "They helped come in just 2 hours on a weekend and cleaned up my clog. Also quick response, thanks for your service",
    date: "Jun 22, 2025",
  },
  {
    title: "Plumbing help",
    text: (
      <>
        He did an amazing job at installing bidet sprays and verifying no leaks
        in both my bathrooms.
        <br />
        <br />
        He's super friendly, dilligent, and organized with his own tools. He
        quickly fixed the bidets and also helped me learn.
        <br />
        <br />
        Highly recommend him for any plumbing tasks!
      </>
    ),
    date: "Jul 2, 2025",
  },
  {
    title: "Appliance Installation & Repairs",
    text: "Efficient, communicative, and a great worker! Thanks so much for installing our AC!",
    date: "Jul 13, 2025",
  },
  {
    title: "Appliance Installation & Repairs",
    text: "Cholponbek installed my window AC unit quickly and efficiently.He arrived within hours of my request on one of the hottest days of the summer. Thank you, Cholponbek!",
    date: "Jul 16, 2025",
  },
  {
    title: "Plumbing help",
    text: "Friedly, professional, and had everything needed for the plumbing service - would highly recommend and will definitely book again when needed!",
    date: "Jul 18, 2025",
  },
  {
    title: "Plumbing help",
    text: "Helpful and quick with diagnosing and repairing a leaky pipe under the kitchen sink!",
    date: "Jul 20, 2025",
  },
  {
    title: "Furniture Assembly",
    text: "Bek did a great job putting together a large complicated shed and even helped level the area! He also cleaned up all the packaging after which was so nice",
    date: "Jul 23, 2025",
  },
  {
    title: "Plumbing help",
    text: "Amazing work and I was super impressed with his flexibility in working around my work schedule and availability! Can't recommend enough.",
    date: "Jul 28, 2025",
  },
  {
    title: "Furniture Assembly",
    text: "Professional and fast, great situation awareness. Helped set up the whole gaming center without having to specify each detail.",
    date: "Aug 7, 2025",
  },
  {
    title: "Well Repair",
    text: "Communicative and careful",
    date: "Aug 18, 2025",
  },
];

const newTestimonials = [
  "Great work and excellent communication. Would definitely hire again.",
  "Came prepared, worked efficiently,and paid great attention to detail. Even suggested improvements beyond the scope.",
  "Amazing work and very flexible with scheduling, Highly recommended.",
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="wrapper pt-[108px] pb-[32px] sm:pb-[120px]">
        <h2 className="s-title my-[25px] text-center">
          Trusted by Washington Homeowners
        </h2>
        <p className="text-[18px] sm:text-[20px] text-(--dark-blue) mb-[40px] text-center mx-auto">
          Built on quality workmanship, clear communication, and accountability.
        </p>

        <div className="scroller">
          <div className="flex flex-wrap justify-center gap-[20px]">
            {/* {[...testimonials,...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex flex-col bg-[#ebedec] p-[25px_30px] basis-[300px] sm:basis-[550px] shrink-0"
              >
                <div className="flex gap-[10px] justify-between items-center">
                  <span className="font-semibold text-[16px] text-[#8a9299]">
                    {t.date}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star: number) => (
                      <img
                        key={star}
                        width={20}
                        height={21}
                        src={`/svg/star.svg`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-[24px]">
                  <h4 className="font-bold text-[18px] leading-normal">
                    {t.title}
                  </h4>
                  <p className="text-(--black) text-[16px] mt-[5px]">
                    {t.text}
                  </p>
                </div>
              </div>
            ))} */}

            {newTestimonials.map((t, i) => (
              <div
                className="h-fit bg-white text-center basis-[320px] shadow p-[20px] flex flex-wrap flex-col items-center"
                key={i}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star: number) => (
                    <StarIcon
                      className="text-[#e3b960]"
                      key={star}
                      width={25}
                      height={26}
                    />
                  ))}
                </div>
                <p className="mt-[10px] text-[16px] sm:text-[20px] text-(--dark-blue) before:content-[url('/svg/quote-left.svg')] before:inline before:align-super after:content-[url('/svg/quote-right.svg')]">
                  {t}
                </p>

                <span className="text-(--grey) text-[14px] mt-[12px]">
                  - Homeowner, WA
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
