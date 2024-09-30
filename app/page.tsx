import Image from "next/image";
import Hero from "./ui/components/landing/hero";
import Works from "./ui/components/landing/works";
import Footer from "./ui/components/landing/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <Footer />
    </div>
  );
}
