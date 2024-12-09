import Image from "next/image";
export default function Hero() {
  return (
    <div className="rounded-3xl bg-[#FFFFFF66] p-4">
      <div className="sm:block lg:flex justify-between w-100 px-8 rounded-3xl bg-gradient-to-r from-[#ffffff] to-[#f4f4f4]">
        <div className="hidden md:block border-0">
          <Image
            alt="Banner image"
            className="border-0"
            src="/img/hero_section.png"
            width="500"
            height="200"
          />
        </div>
        <div className="w-50 py-5">
          <p className="m-0 text-left md:text-right font-semibold text-[38px] lg:text-[30px] xl:text-[38px] pr-0 md:pr-6 overflow-x-auto md:overflow-hidden">
            <span className="text-[#16649e]">Samyamta Sen </span>is a digital
            <br /> <span className="underline"><i>product designer</i></span>
            <br /> currently designing
            <br /> at <span className="text-[#ff774c]">Digi Technology.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
