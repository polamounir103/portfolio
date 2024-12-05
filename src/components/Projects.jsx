import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
  return (
    <section className="" id="projects">
      <div className="p-5 py-20 md:p-20 lg:p-24 flex flex-col gap-10">
        <div>
          <h2 className="inline-block pb-5 text-4xl font-semibold relative after:bottom-0 after:left-0 after:w-3/4 after:h-1 after:bg-sky-500 after:absolute">
            Projects
          </h2>
        </div>
        <p className="text-xl">Here is my Projects</p>

        <ProjectsContainer />
      </div>
    </section>
  );
}
