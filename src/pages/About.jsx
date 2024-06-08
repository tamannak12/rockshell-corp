import img from "../assets/images/team.jpg";
import about from "../assets/images/about.svg";
import A from "../assets/images/pro1.svg";
import B from "../assets/images/90.svg";
import C from "../assets/images/91.svg";

function About() {
  return (
    <div className="mx-0">
      <div className="flex justify-center">
        <img src={about} alt="ABOUT US" />
      </div>
      <div className="mt-12 flex flex-col md:flex-row md:items-center justify-center">
        <div className="flex flex-col m-4 text-justify text-gray-400 font-normal md:w-1/2">
          <p>
            Rockshell Corp is the leading manufacturer for Innovative Heating,
            cooling and Effluent/Chemical recovery system in India. The
            state-of-the-art manufacturing facility at Vasai, Maharashtra with
            multi-level infrastructure is optimized to manufacture one its kind
            Chemical heating Heat pump, Heat Pump Chillers and Heat Pump
            Evaporators under a single roof which are designed by a staff which
            has expertise, specialization and combined years of experience of
            more than 100 Years.
          </p>
          <p className="mt-2">
            The cutting-edge technology, with machines and equipments sourced
            from the best in class producers, aim to help in cost leadership,
            scale of operations and reliability standards as per global
            benchmarks. Adhering to its promise of being energy efficient in all
            its dimensions, Rockshell continues to innovate and strives to save
            operational cost for its customer. Simultaneously it rededicates
            itself to its mission of creating cleaner environment across the
            globe through its products and services.
          </p>
        </div>
        <div className="mx-2 md:w-auto flex justify-end items-center">
          <img
            src={img}
            alt="team PHOTO"
            className="rounded-xl shadow-xl object-cover w-full max-w-xl"
          />
        </div>
      </div>

      <div className="mt-12 font-bold">
        <h2 className="flex text-xl justify-center">WHO ARE WE?</h2>
        <div className="m-6 mt-6 flex flex-col md:flex-row justify-around gap-4">
          <div className="flex justify-center mb-6 md:mb-0">
            <img src={A} />

            <span className="flex flex-col ml-4 text-left font-semibold">
              Professional Workers
              <span className="text-left text-gray-400  font-normal">
                Our dedicated workmanship, structured approach & unmatched
                commitment sets us apart from the rest.
              </span>
            </span>
          </div>

          <div className="flex justify-center mb-6 md:mb-0">
            <img src={B} />

            <span className="flex flex-col ml-4 text-left font-semibold">
              Effective Team Work
              <span className="text-left text-gray-400  font-normal">
                Our team of professionals works in close co-ordination to give
                our clients a seamless and hassle-free experience.
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            <img src={C} />

            <span className="flex flex-col ml-4 text-left font-semibold">
              Quality Assurance
              <span className="text-left text-gray-400  font-normal">
                We pay close attention at every stage of production to ensure
                that the quality standards are met at all times.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
