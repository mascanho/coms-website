import Description from "@/components/Description";
import Hero from "@/components/Layout/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import { AvatarGroup } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <SolutionsSection />
    </main>
  );
}
