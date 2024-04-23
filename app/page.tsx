import About from "@/components/About";
import Customers from "@/components/Customers";
import Description from "@/components/Description";
import Hero from "@/components/Layout/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import Stats from "@/components/Stats";
import { AvatarGroup } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Stats />
      <SolutionsSection />
      <About />
      <Customers />
    </main>
  );
}
