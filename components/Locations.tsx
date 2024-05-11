import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const Locations = (props: {}) => {
  return (
    <section className="w-full  mx-auto py-12 sm:pt-20 sm:pb-32 bg-white dark:bg-[#1F2937]">
      <div className="container grid items-center justify-center gap-6 ">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Locations
          </h2>
          <p className="mx-auto max-w-[700px] text-[#6B7280] dark:text-[#D1D5DB] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Visit us at one of our convenient locations across the country.
          </p>
        </div>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Headquarters
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Av. D. João II, nr. 36 PI <br /> 2910 Setúbal,{" "}
              <span className="font-bold">Portugal</span>
            </p>
            <div className="flex items-center space-x-1  text-[#6B7280]">
              <FaEnvelope className="text-sm mt-1" />
              <a
                className="underline-offset-1 mt-1 underline text-sm"
                href="mailto:geral@crossedlines.eu"
              >
                geral@crossedlines.eu
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Sales Office
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Rua da Junqueira, no39 Edifício Rosa – Sala 7A
              <br />
              1300-307 Lisboa <br /> <span className="font-bold">Portugal</span>
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">HR office</h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Rua Sacadura Cabral, 54 3o Andar <br />
              2580-361 Alenquer <br />{" "}
              <span className="font-bold">Portugal</span>
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Head Office France
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Pyratoys 4 route de Pitoys 64600 <br /> Angelet <br />{" "}
              <span className="font-bold">France</span>{" "}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Marselhe office
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              14-16 Rue d’Athenes <br /> Z.I Les Estroublans 13127 Vitrolles{" "}
              <br />
              <span className="font-bold">France</span>{" "}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Montepelier office
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              332 Rue des Marchands 30220 Aigues <br /> Mortes
              <br />
              <span className="font-bold">France</span>{" "}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Lyon office
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              5 Rue de Chatagnon 38430 Moirans <br /> Lyon
              <br />
              <span className="font-bold">France</span>{" "}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-[#374151]">
            <h3 className="text-lg font-semibold text-[#F97316]">
              Sales office
            </h3>
            <p className="text-[#6B7280] dark:text-[#D1D5DB]">
              Suite A, 6 Honduras Street <br /> London, EC1Y 0TH
              <br />
              <span className="font-bold">United Kingdom</span>{" "}
            </p>
          </div>
          <a
            className="h-full w-full text-xl text-white"
            href="mailto:geral@crossedlines.eu"
          >
            <div className="rounded-lg bg-brand-primary p-6 shadow-lg  animate-pulse h-full dark:bg-[#374151] flex items-center justify-center">
              <span>Contact us</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
