import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import lumen_2 from "./images/lumen_2.png";
import lumen_5 from "./images/lumen_5.png";
import lumen_6 from "./images/lumen_6.png";
import lumen_7 from "./images/lumen_7.jpg";
import lumen_8 from "./images/lumen_8.png";
import ScrollElement from "./ScrollElement";

const Lumen = () => {
  return (
    <div className="w-full flex justify-center mb-40 min-w-full font-normal text-coolGrey900 font-display">
      <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 mt-24 relative">
        <ScrollElement strokeColor={"#F7C948"} />
        <div className="text-4xl text-coolGrey700 mb-2 font-medium">
          Lumen: Sustainable use of electricity
        </div>
        <div className="text-xl text-yellowVivid600 font-extralight mb-8 ">
          Ever thought about the environment when you charge your iPhone?
        </div>

        <div>
          <span className={` italic font-thin block mb-8`}>
            This work is published at the{" "}
            <a
              href="https://vbn.aau.dk/da/publications/lumen-a-case-study-of-designing-for-sustainable-energy-communitie"
              target="_blank"
              rel="noreferrer"
              className={`underline`}
            >
              OzCHI '20 conference
            </a>
          </span>
        </div>

        <div className="text-xl font-semibold"></div>

        <div className="mb-2">
          Sustainable development goals, renewable energy consumption and
          climate action are all extremely important topics. The place and, in
          particular, time at which electricity is consumed can greatly
          influence the impact electricity production has on the environment, as
          depending on the availability of sustainable energy sources, the
          emissions of greenhouse gasses can be significantly larger at certain
          times of the day.
        </div>
        <div className="font-bold mb-8">
          The challenge in this project was to design and build a system that
          would help people become aware of sustainable energy consumption.
        </div>

        <div className="mb-1 pl-2">
          In this project I particularly contributed to
        </div>
        <div className="p-4 bg-yellowVivid200 w-full rounded-md mb-8">
          <ul className="list-disc list-inside bg-yellowVivid200 rounded-lg">
            <li className="bg-yellowVivid200 mb-2">
              Ideation of solution space
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Designing the digital application UI
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Conducting a 2-week field study
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Analyzing qualitative data
            </li>
            <li className="bg-yellowVivid200">
              Presenting our work as part of the OzCHI conference
            </li>
          </ul>
        </div>

        <div className="text-2xl font-medium mb-2">Design process</div>
        <div className="mb-6">
          We used the forced relationship method to ideate. It had us take two
          seemingly unrelated items and pair them to create a concept that fit
          our problem. A few interesting concepts arose from this activity. We
          further explored these in a 10:10 sketching round. Presenting these to
          each other we agreed on both a physical and a digital prototype
          concept to accommodate our problem space. To guide our efforts, we
          created a user journey.
        </div>

        <div className="flex justify-center  mb-6">
          <Zoom>
            <img src={lumen_2} className="" width="350px" alt="sketches" />
          </Zoom>
        </div>

        <div className="text-2xl font-medium mb-2 ">Prototypes</div>

        <div className="mb-6">
          The digital prototype is an app that provides data about electricity
          consumption of an individual household and the community it is
          connected to. The app informs the user of energy consumption both
          generally and in regard to specific electronic appliances. Feedback on
          electricity sustainability is visualized by a green or red background.
        </div>
        <div className="flex justify-center  mb-6">
          <Zoom>
            <img src={lumen_5} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>

        <div className="mb-6">
          The physical prototype is an integrated modular lamp system that
          provides real-time information about the current CO2-impact of the use
          of electricity. It helps a household consume environmentally friendly
          energy by focusing on bringing a community together with the shared
          goal of using electricity at times of the day that are sustainably
          beneficial.
        </div>
        <div className="flex justify-center  mb-2">
          <Zoom>
            <img src={lumen_6} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>
        <div className="flex justify-center  mb-6">
          <Zoom>
            <img src={lumen_7} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>

        <div className="mb-6">
          Our solution draws on both a database, smartplugs and an energy data
          service API. Communication with all these endpoints and the two
          prototypes was handled by a REST API.
        </div>
        <div className="flex justify-center  mb-6">
          <Zoom>
            <img src={lumen_8} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>

        <div className="text-2xl font-medium mb-2 ">Results</div>
        <div className="mb-6">
          The participants in the study showed a collective awareness of being
          in an energy community, where they started to update themselves on
          their own energy consumption patterns in relation to others. The
          physical prototype served as an effective reminder of being
          sustainable – more so than an app on their iPhone might’ve done.
          Participants, interestingly, also started monitoring each other,
          seeing if they were spending a lot of unsustainable energy, which
          would have consequence for the shared statistics of energy
          consumption.
        </div>

        <div className="text-2xl font-medium mb-2 ">
          Challenges and takeaways
        </div>

        <div className="p-4 bg-yellowVivid200 w-full rounded-md mb-8">
          <ul className="list-disc list-inside bg-yellowVivid200 rounded-lg">
            <li className="bg-yellowVivid200 mb-2 ">
              The rigidity of a physical prototype is of special importance when
              you deploy it in a real-life setting
            </li>
            <li className="bg-yellowVivid200 mb-2">
              It is important to choose ideation techniques according to the
              team and the problem space
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Skill in asking open-ended explorative questions is very valuable
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Experience with presenting work at a scientific conference
            </li>
            <li className="bg-yellowVivid200 mb-2">
              Further improving UI design skills and experience with Figma
            </li>
            <li className="bg-yellowVivid200 ">
              Design feedback sessions can provide constructive and useful
              feedback
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lumen;
