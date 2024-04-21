"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Button, Paper, Title, useMantineTheme, Text } from "@mantine/core";
import { FaArrowCircleRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const data = [
  {
    solution: "Survey",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "Dison of versatile software that allows to export in any format according to the needs of the Client. ",
    link: "#survey",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "We construct any telecommunications network with guaranteed quality through its dedicated management teams.",
    solution: "Construction",
    link: "#construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "Using technical and human structure to make Television, Internet and Telephone installations for Subscribers / Customers of any Operator.",
    solution: "Instalation",
    link: "#installation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "Efficiently securing legal permissions crucial for telecom network construction, navigating regulatory hurdles with expertise.",
    solution: "Licensing & Management",
    link: "#licensing",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "Recognizing that operators have different needs for their networks, we offer different fiber optic networks. With a qualified team capable of present- ing a solution at the engineering level.",
    solution: "Planning",
    link: "#planning",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "With technical and human structure, capable of replacing and testing any type of telecommunications network, from the operations center to the Final Client.",
    solution: "Maintenance",
    link: "#maintenance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title:
      "Prioritizing delivery of top-quality services by ensuring continuous training for its employees, keeping them abreast of the latest technologies.",
    solution: "Training",
    link: "#training",
  },
];

interface CardProps {
  image: string;
  title: string;
  solution: string;
  link?: string;
}

function Card({ image, title, solution, link }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="md"
      radius="md"
      // style={{ backgroundImage: `url(${image})` }}
      // className={classes.card}
      className="w-full h-[200px]"
    >
      <section className="flex flex-col  space-y-4 h-full  relative">
        <h3 className="font-bold text-sm text-brand-primary">{solution}</h3>
        <span className="text-xs">{title}</span>
        <a href={link} className="absolute bottom-0 right-1 cursor-pointer">
          <FaArrowCircleRight className="text-brand-primary absolute bottom-0 right-0" />
        </a>
      </section>
    </Paper>
  );
}

function HeroCarrousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "25%" }}
      slideGap={{ base: "xl", sm: "sm" }}
      height={230}
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      className="w-full "
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}

export default HeroCarrousel;
