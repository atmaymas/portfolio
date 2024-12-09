import { mulish } from "@/app/ui/font";
import Image from "next/image";

export default function Page() {
  return (
    <div className={`${mulish.className}`}>
      <div className="px-12">
        <div className="text-center mb-12">
          <p className="text-4xl font-thin">Landing Page Design Showcases</p>
        </div>
        <div className="md:flex md:space-x-6 md:mb-8 justify-center">
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#8f0700] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">UNICAMPUS</p>
              <Image
                src={"/img/works/showcase/unicampus.jpg"}
                alt="Unicampus design"
                width={600}
                height={1800}
              />
            </div>
          </div>
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#2b3288] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">SOFTED</p>
              <Image
                src={"/img/works/showcase/softed.jpg"}
                alt="Softed design"
                width={600}
                height={1800}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-6 md:mb-8 justify-center">
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#ff7c43] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">DIGIWORLD</p>
              <Image
                src={"/img/works/showcase/digiworld.png"}
                alt="Digiworld design"
                width={600}
                height={1300}
              />
            </div>
          </div>
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#462c5b] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">DIGI TECHNOLOGY</p>
              <Image
                src={"/img/works/showcase/digitechnologynepal.png"}
                alt="Digitechnology design"
                width={600}
                height={1300}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-6 md:mb-8 justify-center">
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#1fbfd7] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">PABSON EVENT</p>
              <Image
                src={"/img/works/showcase/pabson.jpg"}
                alt="Pabson design"
                width={600}
                height={1690}
              />
            </div>
          </div>
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#d4481c] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">NEPAL BAR ASSOCIATION</p>
              <Image
                src={"/img/works/showcase/nepal_bar_association.jpg"}
                alt="Nepal bar association design"
                width={600}
                height={1690}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-6 md:mb-8 justify-center">
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#3c7f21] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">DIGICOM</p>
              <Image
                src={"/img/works/showcase/digicom.png"}
                alt="digicom design"
                width={600}
                height={1620}
              />
            </div>
          </div>
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#751d3d] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">WALCHYAL</p>
              <Image
                src={"/img/works/showcase/walchyal.png"}
                alt="WALCHYAL design"
                width={600}
                height={1690}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-6 md:mb-8 justify-center">
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#a68430] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">BMG SYSTEMS</p>
              <Image
                src={"/img/works/showcase/bmg.jpg"}
                alt="BMG design"
                width={600}
                height={1002}
              />
            </div>
          </div>
          <div className="md:w-5/12 mb-8">
            <div className="rounded-lg bg-[#0057ff] p-6 flex flex-col items-center justify-center">
              <p className="mb-4 text-center text-white text-xl">PIICS</p>
              <Image
                src={"/img/works/showcase/piics.png"}
                alt="PIICS design"
                width={600}
                height={1002}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
