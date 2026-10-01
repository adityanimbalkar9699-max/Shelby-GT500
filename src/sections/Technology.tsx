export default function Technology() {
  const cards = [
    {
      title: "CONNECTED PERFORMANCE",
      desc: "Over-the-air tuning and telemetry analysis in real-time.",
    },
    {
      title: "DRIVER ASSISTANCE",
      desc: "Next-gen sensors mapping the environment at millisecond latency.",
    },
    {
      title: "SMART CONTROL",
      desc: "Adaptive suspension adjusting to road conditions 1000x per second.",
    },
  ];

  return (
    <section
      id="technology"
      className="relative w-full py-32 px-6 md:px-12 bg-mustang-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
            05 // TECHNOLOGY
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
            DIGITAL EDGE.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
              data-hoverable
            >
              <div className="w-12 h-12 border border-mustang-red/50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-mustang-red rounded-full"></div>
              </div>
              <h3 className="font-tech font-bold text-lg tracking-widest mb-4">
                {card.title}
              </h3>
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
