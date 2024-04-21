import React from "react";
import HeroCarrousel from "../HeroCarrouse";
import { FcEngineering } from "react-icons/fc";

function Hero() {
  return (
    <>
      <section className="block h-full items-center justify-center bg-blue-100 sm:py-12 sm:pb-32 pb-20 sm:flex sm:rounded-bl-[300px] rounded-bl-[100px]">
        <div className="flex w-11/12 max-w-5xl mx-auto justify-between space-y-12 sm:flex-row flex-col-reverse">
          <div className="flex flex-col w-full  justify-center space-y-8  pt-5">
            <h1 className="text-4xl font-bold">
              Crossing Solutions Creating Connections
            </h1>
            <h2 className="leading-8">
              Turn Key for B2B Services in the Planning, Construction and
              Maintenance of New Generation Networks
            </h2>
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2  shadow-lg shadow-black/25">
              <div className="flex flex-col">
                <span className="text-gray-500">text here</span>
                <span className="font-bold">text under</span>
              </div>
              <button
                className="h-8 rounded-full bg-orange-500 px-6  text-white"
                type="button"
              >
                button here
              </button>
            </div>
          </div>
          <div className="w-full flex sm:justify-end justify-center">
            <img
              src="https://images.unsplash.com/photo-1681356382603-dc9d7b9ee0c8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero image"
              className="shadow-black-60 sm:w-10/12 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto flex justify-end -mt-10 sm:-mt-12 mb-20 overflow-hidden rounded-xl h-full w-11/12">
        <div className="w-72 flex justify-center items-center">
          <span className="-mt-4 text-6xl font-bold text-gray-400 underline">
            <a href="#solutions">
              <FcEngineering className="animate-spin transition-all duration-1000 ease-in-out" />
            </a>
          </span>
        </div>
        <HeroCarrousel />
      </section>
    </>
  );
}

export default Hero;
