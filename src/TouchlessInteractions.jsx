import React from "react";
import Zoom from "react-medium-image-zoom";
import touchless_2 from "./images/touchless_2.png";
import touchless_4 from "./images/touchless_4.png";
import touchless_5 from "./images/touchless_5.png";
import touchless_6 from "./images/touchless_6.png";
import ScrollElement from "./ScrollElement";

const TouchlessInteractions = () => {
  return (
    <div className="w-full flex justify-center mb-52 min-w-full font-normal text-coolGrey900 font-display">
      <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-44 mt-24">
        <ScrollElement strokeColor={"#EF4E4E"} />
        <div className=" text-4xl text-coolGrey700 mb-2 font-medium">
          Touchless Interactions
        </div>
        <div className="text-xl text-redVivid500 font-extralight mb-5 ">
          Would you touch a public touch display if you had an alternative?
        </div>

        <span className={` italic font-thin block mb-6`}>
          This is my master's thesis project which will end this summer. If you
          have have any feedback or would like to learn more about it, please
          don't hesitate to contact me.
        </span>

        <div className="text-xl font-semibold"></div>
        <div className="mb-2">
          The COVID-19 pandemic has presented the world with an unimaginable
          number of problems. From isolation to vaccine, the health industry is
          doing everything it can to alleviate the problems caused by the new
          corona virus.
        </div>
        <div className="mb-12">
          How can Interaction Design make a difference in a pandemic? Well, have
          you tried standing in front of a touch display in a public space,
          doing things like ordering food at the McDonald’s ordering kiosk,
          putting money on your travel card or getting a ticket at the pharmacy?
          Maybe you thought about touching that display just a little more
          carefully? Virus can spread through different surfaces, and a public
          touch display is no exception. Therefore I (and my master’s thesis
          group) explore the question:
        </div>
        <div className="text-center text-redVivid500 font-medium italic mb-12">
          How can we design technology for use with touch displays to support
          touchless interactions, while maintaining ease of use and efficiency?
        </div>
        <div className="mb-1 pl-2">
          In this project I particularly contributed to
        </div>
        <div className="p-4  bg-redVivid200 w-full rounded-md mb-8">
          <ul className="list-disc list-inside  bg-redVivid200 rounded-lg">
            <li className=" bg-redVivid200 mb-2">
              Observations of public display use
            </li>
            <li className=" bg-redVivid200 mb-2">
              Creating the preliminary design for the applications
            </li>
            <li className=" bg-redVivid200 mb-2">
              Design and plan a pilot study and choosing quantitative relevant
              questionnaires
            </li>
            <li className=" bg-redVivid200 ">Development of the prototype</li>
          </ul>
        </div>

        <div className="text-2xl font-medium mb-2 mt-10">Design process</div>
        <div className="mb-6">
          This project started with a two observation activities. The first
          being an exploration of Aalborg and the public touch displays that
          could be found in the center of the city. This yielded us initial data
          on time consumption, input gesture complexity (how many types of input
          there were), optional choices that extended the interaction and steps
          to complete the task (Table 1). Second, we observed real use of a
          selection of the public displays, carefully avoiding displays that
          could contain personal information. This gave us a rough estimate of
          usage in a short timeframe (Table 2).
        </div>

        <div className="flex mb-8">
          <Zoom>
            <img
              src={touchless_4}
              className=""
              width="350px"
              alt="data table"
            />
          </Zoom>

          <Zoom>
            <img
              src={touchless_5}
              className=""
              width="350px"
              alt="data table"
            />
          </Zoom>
        </div>

        <div className="mb-6">
          The observations provided us with enough data to decide that making an
          application that could imitate a food ordering kiosk would provide us
          with the lengthiest and most complex interaction, so that we could get
          insightful data when performing studies.
        </div>
        <div className="mb-6">
          The prototype we created has two parts; an ordering system made for a
          larger screen and a smartphone sized application that accepts tap and
          slide micro-interactions.
        </div>

        <iframe
          width="700"
          height="415"
          src="https://www.youtube.com/embed/moDj9fJNekU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="flex justify-center mt-10 mb-10">
          <Zoom>
            <img src={touchless_2} className="" width="350px" alt="sketches" />
          </Zoom>

          <Zoom>
            <img
              src={touchless_6}
              className="ml-6"
              width="225px"
              alt="sketches"
            />
          </Zoom>
        </div>

        <div className="mb-6">
          In this prototype, the tablet can be set to a touch controlling mode
          and a smartphone controlling mode. The smartphone controlling mode is
          the first of a range of touchless interactions that we envision for
          the system. During our master’s thesis we will implement other
          features like 3D gesture controlling. The goal will be to explore
          which of the options users prefer the most, so that we can pass on
          this knowledge to public display manufacturers.
        </div>

        <div className="text-2xl font-medium mb-2 ">Results</div>
        <div className="mb-6">
          As this project is only half-way through, results are still
          preliminary. We found that, admittedly with a small sample size, users
          don’t see the smartphone-as-a-controller option negatively.
          Surprisingly it is quite close to ordinary touch interaction in
          attractiveness. The smartphone-as-a-controller option was not quite as
          efficient, but we are still in the process of working out whether more
          training and becoming accustomed to the system will make a difference.
        </div>
        <div className="text-2xl font-medium mb-2 ">
          Challenges and takeaways
        </div>

        <div className="p-4 bg-redVivid200 w-full rounded-md mb-8">
          <ul className="list-disc list-inside bg-redVivid200 rounded-lg">
            <li className="bg-redVivid200 mb-4 ">
              The rigidity of a physical prototype is of special importance when
              you deploy it in a real-life setting.
            </li>
            <li className="bg-redVivid200 mb-4">
              The current situation with COVID-19 is a challenge. It limits the
              possibilities we have of ethically asking people to participate in
              studies, as we would have to ask participants to be present at a
              usability laboratory or in-the-wild at a restaurant, potentially
              exposing themselves to risk.
            </li>
            <li className="bg-redVivid200 mb-4">
              We actively chose not to pursue the design and iterate it
              extensively, to have more time building the base system for the
              prototype. This means that we had more progress on the technical
              side while the design lacked a little.
            </li>
            <li className="bg-redVivid200 mb-4">
              Trying out rapid designing with a pragmatic approach.
            </li>
            <li className="bg-redVivid200 mb-4">
              Facilitating small design crits for feedback.
            </li>
            <li className="bg-redVivid200">
              Seeing the benefits of observational data, even if only quickly
              done.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TouchlessInteractions;
