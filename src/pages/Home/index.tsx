import Title from "./title.tsx";
import HeadText from "./head-text.tsx";

function Home() {
  return (
    <section className="">
      <div className="p-10 pt-30 flex flex-col md:flex-row md:justify-between gap-5 leading-none">
        <Title />
        <HeadText />
      </div>

      <div className=""></div>
    </section>
  );
}
export default Home;
