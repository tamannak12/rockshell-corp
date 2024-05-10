import img from "../assets/images/1.jpg";
import about from "../assets/images/about.svg";
import A from "../assets/images/pro1.svg";
import B from "../assets/images/90.svg";
import C from "../assets/images/91.svg";
import { Companies } from "../components/clients";

function About() {
  return (
    <div className="mx-0">
      <div className="flex justify-center">
        <img src={about} alt="ABOUT US" />
      </div>
      <div className="mt-12 flex items-center">
        <span className="flex flex-col m-2 mr-6 text-justify text-gray-400 font-normal">
          Rockshell Corp is the leading manufacturer for Innovative Heating,
          cooling and Effluent/Chemical recovery system in India. The
          state-of-the-art manufacturing facility at Vasai, Maharashtra with
          multi-level infrastructure is optimized to manufacture one its kind
          Chemical heating Heat pump, Heat Pump Chillers and Heat Pump
          Evaporators under a single roof which are designed by a staff which
          has expertise, specialization and combined years of experience of more
          than 100 Years.
          <span className="text-justify text-gray-400 mt-2 font-normal">
            The cutting-edge technology, with machines and equipments sourced
            from the best in class producers, aim to help in cost leadership,
            scale of operations and reliability standards as per global
            benchmarks. Adhering to its promise of being energy efficient in all
            its dimensions, Rockshell continues to innovate and strives to save
            operational cost for its customer. Simultaneously it rededicates
            itself to its mission of creating cleaner environment across the
            globe through its products and services.
          </span>
        </span>
        <img
          src={img}
          alt="team PHOTO"
          className="m-2  h-auto w-1/2 rounded-xl shadow-xl object-cover"
        />
      </div>
      <div className="mt-12 font-bold">
        <h2 className="flex text-xl justify-center">WHO ARE WE?</h2>
        <div className="m-6 mt-6 flex flex-row justify-around gap-4">
          <div className="flex justify-center">
            <img src={A} />

            <span className="flex flex-col ml-4 text-left font-semibold">
              Professional Workers
              <span className="text-left text-gray-400  font-normal">
                Our dedicated workmanship, structured approach & unmatched
                commitment sets us apart from the rest.
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            <img src={B} />

            <span className="flex flex-col ml-4 text-left font-semibold">
            Effective Team Work
              <span className="text-left text-gray-400  font-normal">
              Our team of professionals works in close co-ordination to give our clients a seamless and hassle-free experience.
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            <img src={C} />

            <span className="flex flex-col ml-4 text-left font-semibold">
            Quality Assurance
              <span className="text-left text-gray-400  font-normal">
              We pay close attention at every stage of production to ensure that the quality standards are met at all times.

              </span>
            </span>
          </div>

        </div>
      </div>
    </div >
  );
}

export default About;
