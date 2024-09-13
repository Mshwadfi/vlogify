


// header
//hero
// divider
// how it works
// divider
// pricing
// divider

import Divider from "@/components/home/Divider";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";


// footer
export default function Home() {
  return (
   <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    <Hero />
    <Divider />
    <HowItWorks />
    <Divider />
    <Pricing />
    <Footer />
   </main>
  );
}
