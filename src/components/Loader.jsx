import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";

const Loader = () => {
  const { progress } = useProgress();

  // round to avoid excessive re-renders
  const displayProgress = useMemo(() => Math.floor(progress), [progress]);

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        {/* Loader Circle */}
        <div className="relative w-20 h-20 mb-4">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-0 rounded-full border-t-2 border-[#10b981] animate-spin" />
        </div>

        {/* Progress Text */}
        <p className="text-white text-[14px] font-semibold tracking-wide">
          {displayProgress}%
        </p>

        {/* Progress Bar */}
        <div className="w-40 h-[2px] bg-white/10 mt-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#10b981] transition-all duration-300 ease-out"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        {/* Subtle label */}
        <p className="text-white/40 text-[11px] mt-2 tracking-wide">
          Loading experience...
        </p>
      </div>
    </Html>
  );
};

export default Loader;
