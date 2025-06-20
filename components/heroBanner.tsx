const HeroBanner = () => {
  return (
    <>
      <div className="bg-dark/80 text-light h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl uppercase font-heading">
                Mantikoří síla v naší oceli
              </h1>
              <p className="mt-8 text-lg font-normal text-pretty text-light/70 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-steel-700 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-steel-800 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                >
                  Hero banner button 1
                </a>
                <a href="#" className="text-sm/6 font-semibold">
                  Hero banner button 2 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden -z-10">
        <video
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/ANTIKOR hero video.webm" type="video/webm" />
          <source src="/video/ANTIKOR hero video.mp4" type="video/mp4" />
        </video>
        <img
          src="/img/ANTIKOR hero thumb.png"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default HeroBanner;
