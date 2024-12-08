import Spline from "@splinetool/react-spline";
function LandingPage() {
  return (
    <main className="land-page relative" id="main">
      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/BAf7r5s5FnHuOOo3/scene.splinecode" />
      </div>
      <div className="flex items-center absolute right-0 bottom-5 bg-purple-200 px-5 py-2 md:px-7 md:py-3 rounded-md">
        <h2 className="font-semibold">Welcome to my Portfolio</h2>
      </div>
      <div className="flex items-center w-full h-full lg:ps-96 absolute top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col gap-10 text-stone-800">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl">Hello , I am </h2>
            <h2 className="text-7xl font-bold ps-2">Pola Mounir</h2>
            <h2 className="text-5xl">Web Developer</h2>
          </div>
          <div>
            <a href="#" className="text-2xl border-b border-stone-800">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
