import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import lumen_1 from "./images/lumen_1.png";
import lumen_2 from "./images/lumen_2.png";
import lumen_5 from "./images/lumen_5.png";
import lumen_6 from "./images/lumen_6.png";
import lumen_7 from "./images/lumen_7.jpg";
import lumen_8 from "./images/lumen_8.png";
import lumen_heatmap from "./images/lumen_heatmap.png";
import lumen_analysis from "./images/lumen_analysis.png";
import lumen_figma from "./images/lumen_figma.png";
import lumen_process from "./images/lumen_process.png";
import ScrollElement from "./ScrollElement";

const Lumen = () => {
  return (
    <div className="w-full lg:px-24 justify-center flex  mb-52 font-light text-coolGrey200 font-body">
      <ScrollElement strokeColor={"#F7C948"} />
      <div className="mt-24 w-full">
        {/* <div className="w-full flex justify-center mb-40 min-w-full font-normal text-coolGrey900 font-display"> */}
        {/* <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 mt-24 relative"> */}
        <div className="text-xl text-coolGrey400 font-medium font-display">
          Overview
        </div>
        <div className="text-5xl mt-4 text-yellowVivid400 font-display">
          Sustainable use of electricity
        </div>
        <div className="text-xl mt-12 leading-relaxed font-display">
          <span className="font-medium italic">When</span> you charge your
          phone, use your dishwasher or watch TV has a large influence on the
          environment. The availability of electricity from renewable sources
          fluctuates during the day. Can small communities help each other hit
          the sweet spot?
        </div>
        <div className="grid grid-cols-2 lg:w-1/2 mt-10 lg:mt-16">
          <div className="font-semibold text-xl font-display  mb-2 text-coolGrey300">
            Role
          </div>
          <div className="font-semibold text-xl font-display  mb-2 text-coolGrey300">
            Project type
          </div>
          <div>Project member</div>
          <div>Bachelor's thesis</div>
        </div>
        <div className="font-semibold font-display text-xl  mt-8 text-coolGrey300">
          Keywords
        </div>
        <div>
          Figma, React, Typescript, Concept-driven process, Prototyping.
        </div>{" "}
        <div className="font-semibold font-display text-xl  mt-8 text-coolGrey300">
          My main contributions
        </div>
        <div>
          Planning and conducting a in-the-wild study, designing the digital
          prototype, facilitating the design process
        </div>
        <div>
          <span className={` italic text-lg block my-8`}>
            This work is published at the{" "}
            <a
              href="https://vbn.aau.dk/da/publications/lumen-a-case-study-of-designing-for-sustainable-energy-communitie"
              target="_blank"
              rel="noreferrer"
            >
              OzCHI '20 conference{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
            </a>
          </span>
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-display font-medium">
          Problem
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Climate change is real folks! So lets do something about it. One of
          the challenges of utilising renewable electricity sources is that in
          the case of wind energy, it is dependent on the weather and therefore
          not controllable. If we want to utilise the sustainable electricity
          that is produced, we need to align demand with supply.
        </div>
        <div className="text-center text-8xl text-yellowVivid400 mb-4 mt-16">
          10
        </div>
        <div className="text-center text-lg mb-20 text-yellowVivid400">
          times more CO2 per kWh can be emitted when renewable sources are
          scarce.
        </div>
        <div className="text-3xl font-display font-semibold mt-8 text-yellowVivid400">
          How might we...
        </div>
        <div className="text-xl leading-relaxed">
          Help a community in shifting their energy consumption to align with
          sustainable electricity production?
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-medium">Solution</div>
        <div className="text-xl mt-4 leading-relaxed">
          Lets get straight to the most exciting part. Here's a quick glance at
          the final product. There is a physical and a digital prototype.
        </div>
        <div className="text-xl mt-16 mb-6 font-medium font-display text-yellowVivid400 text-center">
          Physical prototype
        </div>
        <div className="mb-6 text-xl">
          The physical prototype is an integrated modular lamp system that
          provides real-time information about the current CO2-impact of the use
          of electricity. It helps a household consume environmentally friendly
          energy by focusing on bringing a community together with the shared
          goal of using electricity at times of the day that are sustainably
          beneficial.
        </div>
        <div className="flex justify-center  mb-2">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_6} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>
        <div className="flex justify-center  mb-6">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_7} className="" width="500px" alt="sketches" />
          </Zoom>
        </div>
        <div className="text-xl mt-16 mb-6 font-medium font-display text-yellowVivid400 text-center">
          Digital prototype
        </div>
        <div className="mb-6 text-xl">
          The digital prototype is an app that provides data about electricity
          consumption of an individual household and the community it is
          connected to. The app informs the user of energy consumption both
          generally and in regard to specific electronic appliances. Feedback on
          electricity sustainability is visualized by a green or red background.
        </div>
        <div className="flex justify-center  mb-6">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img
              src={lumen_5}
              className="bg-coolGrey050"
              width="600px"
              alt="sketches"
            />
          </Zoom>
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-medium">
          Process - Concept-driven research
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          In this project we worked with a Concept-driven process. It closely
          resembles the Interaction Design lifecycle model as seen below. We
          work with this approach as research had shown us that user-centered
          processes working with sustainability had yielded few new insights
          lately. The concept driven process allowed us to introduce users to a
          prototype, and learn from their interactions with it. I will now take
          you through our process.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_process} className="" width="500px" alt="process" />
          </Zoom>
        </div>
        <div className="text-3xl font-display mt-4 text-yellowVivid400 leading-relaxed">
          Concept generation and exploration
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The initial exploration of concepts was free of constraints. We used
          the <span className="text-coolGrey100">forced relationship</span>{" "}
          technique for intial ideas. Elaborating on these we sketched out our
          ideas and built upon each others conceptual ideas.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_2} className="" width="400px" alt="process" />
          </Zoom>
        </div>
        <div className="text-3xl font-display mt-4 text-yellowVivid400 leading-relaxed">
          Concept evaluation and iteration
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          To evaluate and decide which concept we would explore in-depth we used
          the tried and true heatmapping method. Each of us voted for the
          concept we saw most potential in.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_heatmap} className="" width="400px" alt="process" />
          </Zoom>
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          We had selected a combination of a digital and physical prototype to
          target users awareness of sustainable energy consumption. The physical
          prototype would consist of modular lamps displaying availability of
          sustainable electricity. Using Figma, we designed the digital
          prototype.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_figma} className="" width="600px" alt="process" />
          </Zoom>
        </div>
        <div className="text-3xl font-display mt-4 text-yellowVivid400 leading-relaxed">
          Prototyping
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          At this point in our education, the prototype was technically complex.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_8} className="" width="600px" alt="process" />
          </Zoom>
        </div>
        <div className="text-xl mt-16 mb-6 font-medium font-display text-yellowVivid400 text-center">
          Physical prototype
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The physical prototype consists of one control tile and several
          individual lights, corresponding to the number of households in the
          community it is connected to. Each household has an identical setup of
          the physical prototype. The control tile lights up when the available
          electricity is sustainable. This informs all members of the community
          that it is en- vironmentally friendly to use any flexible products,
          while the light is on. Each household of the community is represented
          by one tile. The information provided by the physical part has a
          binary design, as the light is either turned on or off in relation to
          the electricity either being sustainable or unsustainable. This is
          done to keep it simple and easily interpretable.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_7} className="" width="600px" alt="process" />
          </Zoom>
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          In this picture the control tile is not hidden, allowing you to see
          the internal electronics.
        </div>
        <div className="text-xl mt-16 mb-6 font-medium font-display text-yellowVivid400 text-center">
          Digital prototype
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The digital part of Lumen is an app that provides additional data
          about the electricity consumption of the individual household, as well
          as within the community, while also making it easier to decide when to
          use sustainable electricity.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img src={lumen_1} className="" width="200px" alt="process" />
          </Zoom>
        </div>
        <div className="text-3xl font-display mt-4 text-yellowVivid400 leading-relaxed">
          Field study
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The purpose of building the prototype was to learn more about how
          people responded to becoming aware of sustainable electricity
          consumption. We had 3 couples be part of the study in a major Danish
          city. All of them knew each other well. The study lasted two weeks. We
          collected data by conducting an initial interview, sending out
          questionnaires during the study and finishing with a final interview.
          Each interview was done in pairs with the couples, to allow for
          discussion between them.
        </div>
        <div className="text-3xl font-display mt-4 text-yellowVivid400 leading-relaxed">
          Analysis and results
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          From each interview we created an{" "}
          <span className="text-coolGrey050">empathy map</span> to get an
          overview of their enthusiasm and feelings toward the system. We also
          analyzed the interview data through a grounded theory approach. For
          this we used{" "}
          <span className="text-coolGrey050">affinity diagramming</span> to
          thematically cluster insights.
        </div>
        <div className="flex justify-center my-16">
          <Zoom overlayBgColorEnd="#0c0c0c" overlayBgColorStart="#0c0c0c">
            <img
              src={lumen_analysis}
              className=""
              width="600px"
              alt="process"
            />
          </Zoom>
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          The results illustrated a range of guidelines to be used for designers
          and researchers in further pursuit of knowledge concerning sustainable
          use of electricity. We created guidelines for designing for; user's
          routines, energy awareness concepts and communities. If you would like
          to hear about these, please get in touch.
        </div>
        <div className="text-xl mt-4 leading-relaxed">
          Of significant interest to me were users saying:
        </div>
        <div className="text-center mt-10 font-normal text-2xl text-yellowVivid400 italic">
          "...you would like to show the others that you're "green" and that you
          think about when you use things [electronic appliances]"
        </div>
        <div className="text-center mt-10 font-normal text-2xl text-yellowVivid400 italic">
          "I think "do we have a phone that needs power" when I see the
          [physical prototype] lights on"
        </div>
        <div className="border border-coolGrey800 border-opacity-25 w-2/3 mx-auto mt-20 mb-20"></div>
        <div className="text-xl text-coolGrey400 font-medium">Takeaway</div>
        <div className="text-xl mt-4 leading-relaxed">
          In my bachelor's thesis I especially learnt how to set up a study from
          start to end. I had a lot of experience conducting interviews, asking
          questions in a way that would create discussion and ultimately
          insights. I spent a large amount of time iterating on designs and
          building the prototype, improving my prototyping skills.
        </div>
      </div>
    </div>
  );
};

export default Lumen;
