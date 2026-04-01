function Image() {
  return (
    <div className="relative flex items-center justify-center w-fit">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-3xl bg-amber-400/20 blur-2xl scale-110 animate-pulse" />

      {/* Decorative corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-xl" />

      {/* Image wrapper with gradient overlay */}
      <div className="relative rounded-2xl overflow-hidden ring-1 ring-amber-400/40 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
        <img
          className="w-80 h-auto object-cover block"
          src="/myself.jpg"
          alt="My picture with a dark background"
        />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
}

export default Image;
