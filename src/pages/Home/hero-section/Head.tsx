import "../../../_essentials.css";

function Head() {
  return (
    <h1 className="w-full flex flex-col md:flex-row gap-4 lg:gap-12 lg:flex-col p-6 md:p-12 2xl:pb-32">
      <div className="text-mist-300 font-semibold text-2xl md:text-6xl lg:self-center pl-6 md:pl-12 pr-4">
        HI, I'M
      </div>
      <div className="flex lg:flex-col flex-row flex-wrap gap-2 gap-x-4 pl-6 sm:pl-12 md:pl-0 lg:pl-12">
        <div className="text-5xl sm:text-6xl lg:text-9xl italic font-[Cursive] text-amber-500 2xl:text-[250px]">
          Ajesh
        </div>
        <div className="text-5xl sm:text-6xl lg:text-9xl italic font-[Cursive] text-cyan-500 2xl:text-[250px]">
          Kharel
        </div>
      </div>
    </h1>
  );
}

export default Head;
