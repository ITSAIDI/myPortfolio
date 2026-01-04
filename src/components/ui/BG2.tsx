import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}
/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 10,
  height = 10,
  squares = [2, 2],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {

  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [horizontal, setHorizontal] = useState<number>(Math.floor(window.innerWidth/width));
  const [vertical, setVertical] = useState<number>(Math.floor(window.innerHeight/height));
  
  useEffect(() => {
    const handleResize = () => {

      setHorizontal(Math.floor(window.innerWidth/width))
      setVertical(Math.floor(window.innerHeight/height))

      //console.log(`Screen Width: ${newWidth}px, Screen Height: ${newHeight}px`);
    };

    window.addEventListener("resize", handleResize);
    
    // Log initial screen size
    //console.log(`Screen Width: ${screenWidth}px, Screen Height: ${screenHeight}px`);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full",
        className,
      )}
      {...(props as any)}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            rx={10}
            tabIndex={0} 
            width={width}
            height={height}
            className={cn(
              "transition-colors duration-0  not-[&:hover]:duration-1000",
              hoveredSquare === index ? "fill-green2" : "fill-transparent",
              squaresClassName,
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
export type { InteractiveGridPatternProps };