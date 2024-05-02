import {
  MdConstruction,
  MdModelTraining,
  MdOutlineLocationSearching,
} from "react-icons/md";
import { GrInstall, GrLicense, GrPlan } from "react-icons/gr";
import { BsTools } from "react-icons/bs";

function SolutionsSection() {
  return (
    <section className="bg-gray-200 text-black rounded-br-[100px] pb-8 sm:rounded-br-[300px]">
      <div className="mx-auto max-w-5xl px-4 py-8 pt-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our solutions</h2>

          <p className="my-4 text-black">
            Crossed Lines offers a set of diverse solutions in optical fiber,
            FTTx, FTTH-PMP, FTTH-P2P and HFC among others, for the design and
            construction of small, medium and large networks.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
          >
            <MdOutlineLocationSearching className="size-10 text-brand-primary" />

            <h2 className="mt-4 text-xl font-bold text-black">SURVEY</h2>

            <p className="mt-1 text-sm text-gray-800">
              Dison of versatile software that allows to export in any format
              according to the needs of the Client. Crossed Lines has teams with
              extensive experience and surveys for telecommunications in both
              Portugal and France.{" "}
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
            id="survey"
          >
            <MdConstruction className="size-10 text-brand-primary" />
            <h2 className="mt-4 text-xl font-bold text-black">CONSTRUCTION</h2>

            <p className="mt-1 text-sm text-black">
              Crossed Lines has the capacity to build any type of telecommunica-
              tions network. It guarantees the quality of construction of the
              network through its work manage- ment teams, which maintain a high
              control over methods, technical and human resources.{" "}
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
          >
            <GrInstall className="size-10 text-brand-primary" />
            <h2 className="mt-4 text-xl font-bold text-black">INSTALLATIONS</h2>

            <p className="mt-1 text-sm text-black">
              Crossed lInes has a technical and human structure to make
              Television, Internet and Telephone installations for Subscribers /
              Customers of any Operator.{" "}
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
          >
            <GrLicense className="size-10 text-brand-primary" />

            <h2 className="mt-4 text-xl font-bold text-black">
              LICENSING & MANAGEMENT
            </h2>

            <p className="mt-1 text-sm text-black">
              For the construction of a telecom- munications network, it is
              necessary to establish a legal support that presupposes obtaining
              “Right of Way and / or Occupation and Civil”.
            </p>
          </a>

          <a
            id="planning"
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
          >
            <GrPlan className="size-10 text-brand-primary" />
            <h2 className="mt-4 text-xl font-bold text-black">PLANNING</h2>

            <p className="mt-1 text-sm text-black">
              Recognizing that operators have different needs for their
              networks, Crossed Lines offers a set of solutions in different
              fiber optic networks. Crossed Lines has a qualified team capable
              of present- ing a solution at the engineering level.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
          >
            <BsTools className="size-10 text-brand-primary" />
            <h2 className="mt-4 text-xl font-bold text-black">MAINTENANCE</h2>

            <p className="mt-1 text-sm text-black">
              The needs of operators to keep their networks in good working
              order, Crossed Lines has a technical and human structure, capable
              of replacing and testing any type of telecommunications network,
              from the operations center to the Final Client.
            </p>
          </a>
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
            href="#"
          >
            <MdModelTraining className="size-10 text-brand-primary" />

            <h2 className="mt-4 text-xl font-bold text-black">TRAINING</h2>

            <p className="mt-1 text-sm text-black">
              In order to offer its customers services with the highest quality
              of their employees in order to keep them permanently updated with
              regard to the latest technologies. The value of Crossed Lines
              lies, par excellence, in its most valuable resource: PEOPLE.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-brand-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-blend-darken focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
