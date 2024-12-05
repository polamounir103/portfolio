import { useState } from "react";
import "./VerticalCarousel.css";
import {
  Html5,
  Css,
  Bootstrap,
  TailwindSVG,
  Js,
  ReactJs,
  Redux,
  Api,
  NodeJs,
  ExpressJs,
  MongoDBSVG,
  JwtSVG,
  AdobeXD,
  Figma,
} from "../../assets/svg/SkillSvg";
const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsSections = [
    {
      name: "FrontEnd",
      skils: [
        {
          title: "HTML",
          image: <Html5 />,
        },
        {
          title: "CSS",
          image: <Css />,
        },
        {
          title: "Bootstrap CSS",
          image: <Bootstrap />,
        },
        {
          title: "Tailwind CSS",
          image: <TailwindSVG />,
        },
        {
          title: "JavaScript",
          image: <Js />,
        },
        {
          title: "React.js",
          image: <ReactJs />,
        },
        {
          title: "Redux Toolkit",
          image: <Redux />,
        },
        {
          title: "Rest API",
          image: <Api />,
        },
      ],
    },
    {
      name: "UI / UX Design",
      skils: [
        {
          title: "Adobe XD",
          image: <AdobeXD />,
        },
        {
          title: "Figma",
          image: <Figma />,
        },
      ],
    },
    {
      name: "BackEnd",
      skils: [
        {
          title: "Node.js",
          image: <NodeJs />,
        },
        {
          title: "Express.js",
          image: <ExpressJs />,
        },
        {
          title: "MongoDB",
          image: <MongoDBSVG />,
        },
        {
          title: "JWT",
          image: <JwtSVG />,
        },
      ],
    },
  ];

  const handleScroll = (i) => {
    setCurrentIndex(i);
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        {skillsSections.map((item, index) => (
          <div className="skills-group w-full" key={index}>
            <div className="flex items-end gap-2">
              <h2 className="text-3xl">{item.name}</h2>
              {item.name === "BackEnd" && (
                <>
                  <span className="text-sm text-gray-500">
                    {" "}
                    just have the knowlage
                  </span>
                </>
              )}
            </div>
            <ul className="skills-list grid grid-cols-1 lg:grid-cols-2 gap-10">
              {item.skils.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill.image}
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerticalCarousel;
