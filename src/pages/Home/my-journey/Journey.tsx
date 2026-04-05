import Header from "./Header.tsx";
import MapJourney from "./MapJourney.tsx";

function Journey() {
  return (
    <div
      className={[
        "relative min-h-screen min-w-screen pt-50 bg-zinc-950 border border-t-zinc-900",
        "flex flex-col justify-start items-center gap-25 pb-50",
      ].join(" ")}
    >
      <Header />
      <MapJourney />
    </div>
  );
}
export default Journey;
