import { mulish } from "@/app/ui/font";
import Image from "next/image";

export default function Page() {
  return (
    <div className={`${mulish.className}`}>
      <div className="px-12">
        <div className="text-center mb-12">
          <p className="text-4xl font-thin">
            Landing Page Design Showcase
          </p>
        </div>
        <div className="md:flex md:space-x-5 md:mb-8">
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#8f0700] p-8">
              <p className="mb-8 text-center text-white">UNICAMPUS</p>
              <Image
                src={"/img/works/showcase/unicampus.jpg"}
                alt="Unicampus design"
                width={650}
                height={1800}
              />
            </div>
          </div>
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#2b3288] p-8">
              <p className="mb-8 text-center text-white">SOFTED</p>
              <Image
                src={"/img/works/showcase/softed.jpg"}
                alt="Softed design"
                width={650}
                height={1800}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-5 md:mb-8">
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#ff7c43] p-8">
              <p className="mb-8 text-center text-white">DIGIWORLD</p>
              <Image
                src={"/img/works/showcase/digiworld.png"}
                alt="Digiworld design"
                width={650}
                height={1300}
              />
            </div>
          </div>
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#462c5b] p-8">
              <p className="mb-8 text-center text-white">DIGI TECHNOLOGY</p>
              <Image
                src={"/img/works/showcase/digitechnologynepal.png"}
                alt="Digitechnology design"
                width={650}
                height={1300}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-5 md:mb-8">
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#1fbfd7] p-8">
              <p className="mb-8 text-center text-white">PABSON EVENT</p>
              <Image
                src={"/img/works/showcase/pabson.jpg"}
                alt="Pabson design"
                width={650}
                height={1690}
              />
            </div>
          </div>
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#d4481c] p-8">
              <p className="mb-8 text-center text-white">NEPAL BAR ASSOCIATION</p>
              <Image
                src={"/img/works/showcase/nepal_bar_association.jpg"}
                alt="Nepal bar association design"
                width={650}
                height={1690}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-5 md:mb-8">
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#3c7f21] p-8">
              <p className="mb-8 text-center text-white">DIGICOM</p>
              <Image
                src={"/img/works/showcase/digicom.png"}
                alt="digicom design"
                width={650}
                height={1620}
              />
            </div>
          </div>
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#751d3d] p-8">
              <p className="mb-8 text-center text-white">WALCHYAL</p>
              <Image
                src={"/img/works/showcase/walchyal.png"}
                alt="WALCHYAL design"
                width={650}
                height={1690}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-5 md:mb-8">
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#a68430] p-8">
              <p className="mb-8 text-center text-white">BMG SYSTEMS</p>
              <Image
                src={"/img/works/showcase/bmg.jpg"}
                alt="digicom design"
                width={650}
                height={1002}
              />
            </div>
          </div>
          <div className="md:w-1/2 mb-4">
            <div className="rounded-lg bg-[#0057ff] p-8">
              <p className="mb-8 text-center text-white">PIICS</p>
              <Image
                src={"/img/works/showcase/piics.png"}
                alt="PIICS design"
                width={650}
                height={1002}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
