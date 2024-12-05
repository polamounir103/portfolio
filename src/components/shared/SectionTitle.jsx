export default function SectionTitle({title}) {
  return (
    <h2 className="inline-block pb-5 text-4xl font-semibold relative after:bottom-0 after:left-0 after:w-3/4 after:h-1 after:bg-sky-500 after:absolute">
      {title}
    </h2>
  );
}
