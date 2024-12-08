import SAcadImag from "../assets/images/SEF.png";
import BaymaxImg from "../assets/images/Baymax.png";
import WeatherApp from "../assets/images/WeatherApp.png";
export default function ProjectsContainer() {
  const projects = [
    {
      title: "S Acad",
      description: "Academic web app for online courses and news articles",
      link: "https://sef-gold.vercel.app/",
      image: SAcadImag,
    },
    {
      title: "Baymax",
      description: "Medical Assistant for diagnostics and predictions",
      link: "https://medical-prediction.vercel.app/",
      image: BaymaxImg,
    },
    {
      title: "Weather App",
      description: "A brief description of Project 2.",
      link: "https://weather-app-pola-mounirs-projects.vercel.app/",
      image: WeatherApp,
    },
    // {
    //   title: "EStore",
    //   description: "A brief description of Project 2.",
    //   link: "/",
    //   image: "",
    // },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="relative">
              <img
                className="object-cover w-full h-64"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-0 hover:bg-opacity-25"></div>
            </div>

            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
