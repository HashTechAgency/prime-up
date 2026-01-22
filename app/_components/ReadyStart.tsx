import Link from "next/link";

export const ReadyStart = () => (
  <div className="py-[60px] min-h-[480px] wrapper">
    <h3 className="s-title text-center">Ready to start your project?</h3>
    <p className="text-center text-(--grey-2)  text-[18px] mt-[12px] sm:text-[24px] max-w-[600px]">Get a clear scope and a free estimate from a lisenced WA contractor</p>

    <div className="flex justify-center gap-[10px] mt-[30px]">
      <Link className="p-button !rounded-[6px]" href={'#'}><span className="max-sm:hidden">Request</span> Free Estimate</Link>
      <Link className="sm:!px-[60px] p-button secondary !border !border-(--grey-800) !rounded-[6px]" href={'#'}>Call Now</Link>
    </div>
  </div>
)
