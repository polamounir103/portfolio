import photo from "../assets/images/photo.jpeg";
import SectionTitle from "./shared/SectionTitle";
export default function AboutMe() {
  const myInfo = [
    {
      title: "Name",
      content: "Pola Mounir Samir",
    },
    {
      title: "Email",
      content: "polamounir103@gmail.com",
    },
    {
      title: "Phone",
      content: "+201068550976",
    },
    {
      title: "City",
      content: "Giza , Egypt",
    },
    {
      title: "Age",
      content: "21",
    },
    {
      title: "Degree",
      content: "Undergraduated",
    },
    {
      title: "Freelance",
      content: "Available",
    },
  ];
  return (
    <section className="" id="about">
      <div className="p-5 py-20 md:p-20 lg:p-24 flex flex-col gap-10">
        <div>
          <SectionTitle title="About Me" />
        </div>
        <p className="text-xl">
          I am a Front-End Developer with good experience specializing in web
          development and user interface design using React.js and Figma.
          Skilled in identifying opportunities to enhance front-end designs and
          improve user experiences, I am seeking to create visually attractive,
          and high-performance web applications.
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          <img src={photo} alt="My_Photo" />
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-3xl">Front End Developer</h2>
            </div>
            <ul>
              {myInfo.map((info, index) => (
                <li
                  key={index}
                  className="py-3 flex items-center gap-2 about-info-item"
                >
                  <span className="text-2xl">{info.title} : </span>
                  <span className="text-xl">{info.content}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg">
              I am experienced in crafting modern web interfaces using React,
              JavaScript, and CSS. With a focus on performance and scalability,
              I aim to create applications that delight users and make an
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
