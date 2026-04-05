export interface _milestones {
  time: string;
  position: "left" | "right";
  title: string;
  content: string;
  techStack?: string[];
}

export default function JourneyCard({
  title,
  position,
  time,
  content,
}: _milestones) {
  return (
    <div
      className={` group relative flex flex-col gap-4 px-8 py-6 bg-zinc-900 backdrop-blur-sm border-y border-x-2 border-zinc-800/50 rounded-2xl transition-all duration-500 ease-out  hover:bg-zinc-900 hover:border-amber-500/50 hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] hover:-translate-y-1 w-[90vw] sm:w-112.5
      ${
        position === "right"
          ? "self-center sm:self-start sm:border-r-amber-500/50"
          : "self-center sm:self-end sm:border-l-amber-500/50"
      }
      `}
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <header className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-500/80">
            <span className="select-none font-mono">‣ </span>
            {time}
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-amber-500/30 to-transparent" />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
      </header>

      <p className="text-sm leading-relaxed text-zinc-400 text-pretty">
        {content}
      </p>

      {/* Aesthetic Connector Dot (For Desktop Timeline) */}
      <div
        className={`
        hidden sm:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-amber-500
        ${position === "right" ? "-right-1.75" : "-left-1.75"}
      `}
      />
    </div>
  );
}
