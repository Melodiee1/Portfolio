function ReachOut() {
  const aHrefClass =
    "flex gap-10 items-center px-1 md:px-3 lg:px-6 py-3 border border-reachout-border hover:border-reachout-border-hover rounded-md text-gray-300 max-w-100% hover:text-white transition ease-in-out duration-300 text-lg";
  const imageClass = "w-10 h-auto";

  return (
    <div className="w-[90%] max-w-250 lg:max-w-[90%] px-1 lg:px-12 py-12 flex flex-col gap-5">
      <h1 className="text-white text-4xl font-semibold tracking-wide mb-7 fade-slide-up">
        Lets <span className="text-amber-500">Connect</span>
      </h1>

      <div className="text-gray-300 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
        necessitatibus quisquam dolore numquam consectetur facilis a.
      </div>

      <div className="flex flex-col self-center gap-4 fade-in">
        <a href="" className={`${aHrefClass}`}>
          <img src="/socialMedia/gmail.png" className={`${imageClass}`} />
          ajeshkharel5@gmail.com
        </a>

        <a href="https://github.com/Melodiee1" className={`${aHrefClass}`}>
          <img
            src="/socialMedia/Github.png"
            className={`${imageClass} rounded-[50%]`}
          />
          github.com/Melodiee1
        </a>

        <a
          href="https://www.instagram.com/ajeshkharel/"
          className={`${aHrefClass}`}
        >
          <img
            src="/socialMedia/instagram.jpg"
            alt=""
            className={`${imageClass} rounded-xl`}
          />
          instagram.com/ajeshkharel
        </a>

        <a
          href="https://www.facebook.com/ajesh.kharel.2025/"
          className={`${aHrefClass}`}
        >
          <img
            src="/socialMedia/Facebook.png"
            alt=""
            className={`${imageClass} rounded-xl`}
          />
          facebook.com/ajeshkharel
        </a>

        {/* <a href="" className={`${aHrefClass}`}>
          <img
            src="/socialMedia/linkedin.png"
            className={`${imageClass} rounded-xl`}
          />
          linkedin.com/ajeshkahrel
        </a> */}
      </div>
    </div>
  );
}
export default ReachOut;
