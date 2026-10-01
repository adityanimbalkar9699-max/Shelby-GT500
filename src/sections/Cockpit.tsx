export default function Cockpit() {
  return (
    <section
      id="cockpit"
      className="relative w-full h-screen flex items-center bg-[#050505]"
    >
      {/* Background graphic implying interior structure */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1C1C1C_0%,_#050505_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid md:grid-cols-2 items-center gap-16">
        <div>
          <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
            04 // COCKPIT
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter mb-6">
            COMMAND
            <br />
            CENTER.
          </h2>
          <p className="font-sans text-white/70 max-w-md leading-relaxed mb-12">
            A driver-centric environment forged from carbon fiber and premium
            materials. The digital cluster provides instantaneous telemetry,
            keeping you locked into the performance loop.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "DRIVER-CENTRIC CONTROL",
                desc: "Ergonomic alignment with vehicle core.",
              },
              {
                num: "02",
                title: "DIGITAL PERFORMANCE DISPLAY",
                desc: "High-resolution telemetry tracking.",
              },
              {
                num: "03",
                title: "PREMIUM MATERIAL SYSTEM",
                desc: "Carbon fiber and brushed titanium.",
              },
            ].map((item) => (
              <div key={item.num} className="group cursor-pointer">
                <div className="flex gap-4 items-baseline border-b border-white/10 pb-4 group-hover:border-mustang-red transition-colors">
                  <span className="font-tech text-mustang-red text-xs">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-tech font-bold text-sm tracking-widest">
                      {item.title}
                    </h3>
                    <p className="font-sans text-white/50 text-xs mt-2 group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract Visualization of Dashboard Layout */}
        <div className="hidden md:flex justify-center items-center h-full relative">
          <div className="w-[400px] h-[200px] border border-white/20 rounded-[40px] relative overflow-hidden glass-panel">
            {/* Steering Wheel Abstract */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] border-4 border-white/30 rounded-full"></div>
            {/* Digital Cluster Abstract */}
            <div className="absolute top-[40px] left-[60px] w-[120px] h-[60px] border border-mustang-red/50 bg-mustang-red/10 rounded overflow-hidden flex items-end justify-center pb-2">
              <div className="w-16 h-8 border-t-2 border-l-2 border-r-2 rounded-t-full border-white/50"></div>
            </div>
            {/* Infotainment Abstract */}
            <div className="absolute top-[40px] right-[60px] w-[100px] h-[80px] border border-white/20 rounded bg-white/5 p-2">
              <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
              <div className="w-2/3 h-2 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
