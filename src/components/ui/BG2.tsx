import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 30,
  height = 30,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const resize = () => {
      setCols(Math.ceil(window.innerWidth / width));
      setRows(Math.ceil(window.innerHeight / height));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [width, height]);

  return (
    <svg
      width={cols * width}
      height={rows * height}
      className={cn("absolute inset-0 w-full h-full", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      {...props}
    >
      {/* MASK */}
      <defs>
        <radialGradient
          id="hover-gradient"
          cx={mouse.x}
          cy={mouse.y}
          r="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="hover-mask">
          <rect
            width="100%"
            height="100%"
            fill="url(#hover-gradient)"
          />
        </mask>
      </defs>

      {/* GRID */}
      <g mask="url(#hover-mask)">
        {Array.from({ length: cols * rows }).map((_, i) => {
          const x = (i % cols) * width;
          const y = Math.floor(i / cols) * height;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "fill-black1 stroke-green1 stroke-[0.5px]",
                squaresClassName
              )}
            />
          );
        })}
      </g>
    </svg>
  );
}
