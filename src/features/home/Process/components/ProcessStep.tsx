"use client";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isEven: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  isEven,
}: ProcessStepProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className={`flex-1 ${isEven ? "" : "md:text-right"} pl-24 md:pl-0`}>
        <div
          className={`text-5xl md:text-7xl font-bold text-white/40 mb-4 ${
            isEven ? "" : "md:text-right"
          }`}
        >
          {number}
        </div>
        <h3
          className={`text-2xl font-bold mb-2 text-white ${
            isEven ? "" : "md:text-right"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-white/85 ${
            isEven ? "" : "md:text-right md:ml-auto"
          } ${isEven ? "max-w-sm" : "md:max-w-sm md:inline-block"}`}
        >
          {description}
        </p>
      </div>

      <div className="relative flex items-center justify-center z-10 absolute-vertical-center md:static">
        <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a] group-hover:border-white/60 transition-all duration-300">
          <div className="text-xl font-bold text-white">{number}</div>
        </div>
      </div>

      <div className="flex-1 hidden md:block">
        <div className="h-[2px] w-full bg-white/30"></div>
      </div>
    </div>
  );
}
