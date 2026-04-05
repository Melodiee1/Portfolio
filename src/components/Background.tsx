function Background() {
  return (
    <div>
      {/*      Cool Background and animation but too laggy so removed it (gonna un-comment when its time to push it into production) */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(32)].map((_, index) => (
          <div
            className="absolute w-1 h-1 rounded-[50%] opacity-60 shadow-lg shadow-emerald-500/50 slow-drift"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Background;
