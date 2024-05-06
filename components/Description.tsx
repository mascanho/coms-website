import React from "react";

function Description() {
  return (
    <section className="max-w-5xl mx-auto sm:mb-28 mb-10 w-11/12 -mt-16 sm:mt-0">
      <div className="mx-auto px-4 sm:px-0 py-8 sm:py-1 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Telecommunications Engineering
            </h2>

            <p className="mt-4 text-gray-600">
              Crossed Lines was created by a group of Engineers and Technicians
              with more than 20 years of experience in new generation network
              telecommunications and who decided to join their experiences to
              create a telecommunications brand across Europe.{" "}
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-brand-primary px-12 py-3 text-sm font-medium text-white transition   hover:bg-brand-primary focus:outline-none focus:scale-95"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
