"use client";

interface PricingToggleProps {
  annual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingToggle({ annual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="border-2 border-white/20 p-1 inline-flex rounded-sm backdrop-blur-sm bg-white/5">
        <button
          onClick={() => onToggle(true)}
          className={`px-6 py-2 text-sm transition-all duration-300 ${
            annual
              ? "bg-white text-black font-medium"
              : "text-white/70 hover:text-white"
          }`}
        >
          Annual <span className="text-xs opacity-80">(Save 20%)</span>
        </button>
        <button
          onClick={() => onToggle(false)}
          className={`px-6 py-2 text-sm transition-all duration-300 ${
            !annual
              ? "bg-white text-black font-medium"
              : "text-white/70 hover:text-white"
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
