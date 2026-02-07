import { useState, useEffect, Children } from "react";

type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? slides.length - 1 : c - 1));

  const next = () => setCurr((c) => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="shrink-0 w-full h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {/* <div className="absolute inset-0 flex items-center justify-between p-4 text-white">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div> */}

      {/* Dots */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`w-3 h-3 rounded-full ${
                curr === i ? "bg-[#111827]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
