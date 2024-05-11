import React from "react";
import Image from "next/image";

function Customers() {
  return (
    <section id="customers">
      <h3 className=" mb-10 text-black/30 max-w-5xl w-full text-xl text-center font-bold mx-auto">
        Trusted by the best
      </h3>
      <div className="h-[90px] items-center flex shadow-inner pt-32 ">
        <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:pt-2 sm:pb-10  max-w-5xl mx-auto logos-slide">
          <div className="absolute w-5 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute w-5 h-full bg-gradient-to-l from-white to-transparent z-10 right-0 " />
          <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="group flex space-x-16 overflow-hidden  ">
            <div className="animate-loop-scroll  group-hover:paused flex space-x-16">
              <img
                src="/logos/celeste.webp"
                alt="logo"
                className="max-w-none"
              />
              <img src="/logos/ar.webp" alt="logo" className="max-w-none" />
              <img src="/logos/axione.webp" alt="logo" className="max-w-none" />
              <img
                src="/logos/bouygues.webp"
                alt="logo"
                className="max-w-none"
              />
              <img
                src="/logos/dstelecom.webp"
                alt="logo"
                className="max-w-none"
              />
              <img src="/logos/huwaei.webp" alt="logo" className="max-w-none" />
              <img src="/logos/jsc.webp" alt="logo" className="max-w-none" />
              <img src="/logos/meo.webp" alt="logo" className="max-w-none" />
              <img src="/logos/nos.webp" alt="logo" className="max-w-none" />
              <img src="/logos/orange.webp" alt="logo" className="max-w-none" />
              <img src="/logos/sfr.webp" alt="logo" className="max-w-none" />
              <img
                src="/logos/vodafone.webp"
                alt="logo"
                className="max-w-none"
              />
            </div>
            <div
              className="animate-loop-scroll group-hover:paused flex space-x-16"
              aria-hidden="true"
            >
              <img
                src="/logos/celeste.webp"
                alt="logo"
                className="max-w-none hover:grayscale-0"
              />
              <img
                src="/logos/ar.webp"
                alt="logo"
                className="max-w-none hover:grayscale-0"
              />
              <img src="/logos/axione.webp" alt="logo" className="max-w-none" />
              <img
                src="/logos/bouygues.webp"
                alt="logo"
                className="max-w-none"
              />
              <img
                src="/logos/dstelecom.webp"
                alt="logo"
                className="max-w-none"
              />
              <img src="/logos/huwaei.webp" alt="logo" className="max-w-none" />
              <img src="/logos/jsc.webp" alt="logo" className="max-w-none" />
              <img src="/logos/meo.webp" alt="logo" className="max-w-none" />
              <img src="/logos/nos.webp" alt="logo" className="max-w-none" />
              <img src="/logos/orange.webp" alt="logo" className="max-w-none" />
              <img src="/logos/sfr.webp" alt="logo" className="max-w-none" />
              <img
                src="/logos/vodafone.webp"
                alt="logo"
                className="max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
