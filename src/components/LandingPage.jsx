import cv from "../assets/files/cv.pdf";
function LandingPage() {
  return (
    <main className="land-page relative" id="main">
      <div className="flex items-center w-full h-full lg:ps-96">
        <div className="flex flex-col gap-10 text-stone-800">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl">Hello , I am </h2>
            <h2 className="text-7xl font-bold ps-2">Pola Mounir</h2>
            <h2 className="text-5xl">Web Developer</h2>
          </div>
          <div>
            <a
              href={cv}
              className="text-2xl border-b border-stone-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
