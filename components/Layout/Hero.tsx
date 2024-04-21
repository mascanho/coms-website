import React from "react";
import HeroCarrousel from "../HeroCarrouse";
import { FcEngineering } from "react-icons/fc";
import AvatarGroup from "../AvatarGroup";

function Hero() {
  return (
    <>
      <section className="block h-full items-center justify-center rounded-bl-[100px] bg-blue-100 pb-20 sm:flex sm:rounded-bl-[300px] sm:py-12 sm:pb-32">
        <div className="mx-auto flex w-11/12 max-w-5xl flex-col-reverse justify-between space-y-12 sm:flex-row">
          <div className="flex w-full flex-col  justify-center space-y-8  pt-5">
            <h1 className="text-4xl font-bold">
              Crossing Solutions Creating Connections
            </h1>
            <h2 className="leading-8">
              Crossed Lines is a telecommunications company that provides B2B
              Services in the planning, construction and maintenance of new
              generation networks. We are specialized on Fiber Optics
              technology.{" "}
            </h2>
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3  shadow-lg shadow-black/25">
              <div className="flex flex-col">
                <span className="text-gray-500">Trusted by the best</span>
                <span className="font-bold">
                  Our customers know who to trust
                </span>
              </div>
              <button
                className="h-8 rounded-full bg-brand-primary  px-6 text-sm  text-white"
                type="button"
              >
                view customers
              </button>
            </div>
            <div>{/* <AvatarGroup /> */}</div>
          </div>
          <div className="flex w-full justify-center sm:justify-end">
            <img
              src="https://images.unsplash.com/photo-1681356382603-dc9d7b9ee0c8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero image"
              className="shadow-black-60 h-auto rounded-lg shadow-lg sm:w-10/12"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto -mt-10 mb-20 flex h-full w-11/12 max-w-5xl justify-end overflow-hidden rounded-xl sm:-mt-12">
        <div className="flex w-72 items-center justify-center">
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
