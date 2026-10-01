import { useEffect, useRef } from "react";
import { useAppContext } from "../../utils/AppContext";
import { cn } from "../../utils/cn";

export default function SoundToggle() {
  const { soundEnabled, setSoundEnabled } = useAppContext();
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);

    if (newState) {
      if (!audioCtxRef.current) {
        const AudioContext =
          window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;

      // Crucial: resume inside the click handler
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Create a deeper, more aggressive engine hum
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(60, ctx.currentTime);

      // LFO for idle pulsing
      const lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(12, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(10, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      // Volume envelope - start instantly so the user hears it
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.5);

      // Filter to muffle it like inside a cabin
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 250;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      lfo.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0,
          audioCtxRef.current.currentTime + 0.5,
        );
        setTimeout(() => {
          if (oscillatorRef.current) {
            oscillatorRef.current.stop();
            oscillatorRef.current.disconnect();
            oscillatorRef.current = null;
          }
        }, 500);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      data-hoverable
      className="flex items-center gap-2 font-tech tracking-widest text-[10px] text-white/50 hover:text-white transition-colors"
    >
      <div className="flex gap-[2px] h-3 items-end">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "w-1 bg-current transition-all duration-300",
              soundEnabled ? "h-full animate-pulse" : "h-1",
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
      [SOUND {soundEnabled ? "ON" : "OFF"}]
    </button>
  );
}
