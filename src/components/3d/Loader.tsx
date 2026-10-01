import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center pointer-events-none text-white w-64">
        <div className="font-tech text-mustang-red tracking-widest text-[10px] mb-4 uppercase">
          DIGITAL PERFORMANCE SYSTEM
        </div>
        <div className="font-display font-bold text-xl tracking-widest mb-4">
          INITIALIZING
        </div>
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-mustang-red transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-tech text-[10px] mt-2 tracking-widest opacity-50">
          {Math.round(progress)}%
        </div>
      </div>
    </Html>
  );
}
