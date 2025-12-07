import { BackgroundBeams } from "./background-beams";

export default function Hero() {
  return (
    <div className="relative">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10">
        <h1>Your content here</h1>
      </div>
    </div>
  );
}