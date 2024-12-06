import SectionTitle from "./shared/SectionTitle";
import VerticalCarousel from "./ui/VerticalCarousel ";

export default function Skills() {
  return (
    <section className="bg-stone-100" id="skills">
      <div className="p-5 py-20 md:p-20 lg:p-24 flex flex-col gap-10">
        <div>
          <SectionTitle title="Skills" />
          <p className="text-lg pt-5">Here is my skills and technologies</p>
        </div>

        <VerticalCarousel />
      </div>
    </section>
  );
}
