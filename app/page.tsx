import About from "@/components/About";
import Customers from "@/components/Customers";
import Description from "@/components/Description";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Layout/Hero";
import Reviews from "@/components/Reviews";
import SolutionsSection from "@/components/SolutionsSection";
import Stats from "@/components/Stats";
import AccordionEl from "@/components/ui/AcocrdiolEl";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Stats />
      <SolutionsSection />
      <About />
      <Customers />
      <Reviews />
      {/* <AccordionEl /> */}
      <Footer />
    </main>
  );
}
