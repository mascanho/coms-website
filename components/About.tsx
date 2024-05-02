import TimelineIMS from "./Timeline";

function About() {
  return (
    <section className="max-w-5xl w-11/12 mx-auto  m:mt-0 mt-16 ">
      <div className="mx-auto px-4 sm:px-0 py-2 my-20 sm:py-1 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative mt-5 sm:mt-0  h-full overflow-hidden order-last rounded-lg sm:h-80 lg:order-last lg:h-full flex items-center justify-center">
            <TimelineIMS />
          </div>

          <div className="lg:py-24 w-11/12 sm:w-full  mx-auto">
            <span className="text-brand-primary text-sm">
              INTEGRATED MANAGEMENT SYSTEM
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl mt-5">
              QUALITY ENVIROMENT SAFETY
            </h2>

            <p className="mt-4 text-gray-600">
              We integrated Management System Quality, Safety and Environment,
              in compliance with the requirements of following standards.{" "}
            </p>
            <p className="mt-4 text-gray-600">
              Always in the focus of the customer’s satisfaction. With the
              implementation of the SGI system (Integrated Management System),
              allow Crossed Lines a centralization of data and an overview of
              operations.
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

export default About;
