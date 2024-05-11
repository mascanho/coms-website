// @ts-nocheck
import { FaKey, FaRocket, FaUser } from "react-icons/fa";
import TimelineIMS from "./Timeline";
import { FanIcon } from "lucide-react";

function Values() {
  return (
    <section
      className="max-w-5xl w-11/12 mx-auto  sm:mt-0 sm:pt-20 mt-1"
      id="values"
    >
      <div className="mx-auto px-4 sm:px-0 py-2  sm:py-1 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative  w-full  order-last m-auto h-full overflow-hidden  rounded-lg  lg:h-full flex items-center justify-center ml-5 sm:justify-center">
            <img
              src="https://www.orange-business.com/sites/default/files/styles/870x420/public/qui_sommes_nous_banner_870x420.jpg.webp?itok=hmVTRuJs"
              alt="company values"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className=" w-11/12 sm:w-full  mx-auto">
            <span className="text-brand-primary text-sm">
              COMPANY &amp; STRATEGY
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl mt-5">OUR STORY</h2>

            <p className="mt-4 ">
              CrossedLines has a very experienced management team and a strong
              and experienced technical team, with the objective of creating a
              leading company in the whole of Europe with the ability to work
              for all Fiber Optic and Mobile networks.{" "}
            </p>
            <p className="mt-4">
              Betting on intensive training and excellent human resource
              management, which allows it to be a company providing quality
              services.{" "}
            </p>
            <p className="mt-4">
              Crossed Lines also has the help of a large group of partner
              companies with a lot of experience in the telecommunications area
              that helps Crossed Lines to grow with quality
            </p>
          </div>
        </div>
      </div>
      <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-transparent mt-28">
        <div className="w-full">
          <div className="space-y-6 text-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  w-full">
              <div className="bg-white border border-[#FFA500]/20 rounded-lg p-6 flex flex-col items-center text-center">
                <FaRocket className="h-10 w-10 text-[#FFA500]" />
                <h3 className="mt-4 text-lg font-semibold">Vision</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Our Vision is to became a significant provider on several
                  countries, deploying telecommunications services for the new
                  high speed wired and wireless networks.
                </p>
              </div>
              <div className="bg-white border border-[#FFA500]/20 rounded-lg p-6 flex flex-col items-center text-center">
                <FanIcon className="h-10 w-10 text-[#FFA500]" />
                <h3 className="mt-4 text-lg font-semibold">Values</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Through the development of its activity, Crossed Lines is
                  supported in values such as Business Integrity, Respect and
                  Value all People, Ecological Embracement, Quality and Customer
                  Focus.
                </p>
              </div>
              <div className="bg-white border border-[#FFA500]/20 rounded-lg p-6 flex flex-col items-center text-center">
                <FaKey className="h-10 w-10 text-[#FFA500]" />
                <h3 className="mt-4 text-lg font-semibold">Mission</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We identify, training and deploy the highly specialized
                  technicians to integrate our client’s telecommunication
                  projects. <br /> We deploy global telecommunications services
                  over the new generation’s high speed network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Values;
