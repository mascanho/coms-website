import About from "@/components/About";
import Customers from "@/components/Customers";
import Description from "@/components/Description";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Layout/Hero";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import SolutionsSection from "@/components/SolutionsSection";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import AccordionEl from "@/components/ui/AcocrdiolEl";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Stats />
      <SolutionsSection />
      <section className="sm:pb-20 pb-10 ">
        <About />
      </section>
      <section className="bg-gray-200 sm:rounded-tl-[200px] sm:rounded-br-[200px] rounded-tl-[100px] rounded-br-[100px] py-10 pb-20 sm:pt-0 sm:-mt-20 mb-10">
        <Values />
      </section>
      <Locations />
      <Customers />
      <Reviews />
      {/* <AccordionEl /> */}
      <Footer />
    </main>
  );
}
