"use client";
import React, { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { ImHappy } from "react-icons/im";

function Stats() {
  const [count, setCount] = useState(0);
  const [years, setYears] = useState(0);
  const [countries, setCountries] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment count until it reaches 100
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
        if (years < 20) {
          setYears((prevYears) => prevYears + 1);
        }
        if (countries < 8) {
          setCountries((prevCountries) => prevCountries + 1);
        }
      }

      if (customers < 200) {
        setCustomers((prevCustomers) => prevCustomers + 1);
      } else {
        clearInterval(interval); // Stop the interval when count reaches 100
      }
    }, 50); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [count, years, countries, customers]);

  return (
    <section className="bg-brand-primary py-14 sm:py-0 sm:h-52 w-full ">
      <div className="grid  sm:grid-cols-4 w-11/12 sm:place-items-center max-w-5xl h-full mx-auto gap-y-6">
        <div className="flex items-center space-x-2">
          <div className="border-black/50 border-2 rounded-full w-16 h-16 flex items-center justify-center">
            <IoPersonSharp className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-white text-5xl font-bold">{count}%</h2>
            <p className="text-sm text-black/50 ml-1 font-semibold">
              Committed to you
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="border-black/50 border-2 rounded-full w-16 h-16 flex items-center justify-center">
            <SiSololearn className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-white text-5xl font-bold">{years}+</h2>
            <p className="text-sm  text-black/50 ml-1 font-semibold">
              Years of experience
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="border-black/50 border-2 rounded-full w-16 h-16 flex items-center justify-center">
            <BiWorld className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-white text-5xl font-bold">
              {countries}
              <span className="text-3xl"> offices</span>
            </h2>
            <p className="text-sm text-black/50 ml-1 font-semibold">
              Around the world
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="border-black/50 border-2 rounded-full w-16 h-16 flex items-center justify-center">
            <ImHappy className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-white text-5xl font-bold">
              {customers}
              <span className="text-4xl">+</span>
            </h2>
            <p className="text-sm text-black/50 ml-1 font-semibold">
              Satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
