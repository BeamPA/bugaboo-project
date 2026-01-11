"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HighlightsPage() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollLeft = () => embla && embla.scrollPrev();
  const scrollRight = () => embla && embla.scrollNext();

  const updateArrows = () => {
    if (!embla) return;
    setCanScrollLeft(embla.canScrollPrev());
    setCanScrollRight(embla.canScrollNext());
  };

  useEffect(() => {
    if (!embla) return;
    updateArrows();
    embla.on("select", updateArrows);
    embla.on("reInit", updateArrows);
  }, [embla]);

  return (
    <div className="flex flex-col py-8 px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-[144px] gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">ไฮไลต์แนะนำ</h2>

          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            )}

            <div
              className="overflow-hidden rounded-xl px-4 sm:px-6 lg:px-8"
              ref={emblaRef}
            >
              <div className="flex gap-6 px-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] sm:min-w-[600px] lg:min-w-[800px] h-90 bg-white shadow rounded-xl flex items-center justify-center text-4xl font-semibold"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">เนื้อหามาใหม่</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-48 bg-gray-200 rounded-xl flex items-center justify-center text-xl font-medium"
              >
                เนื้อหา {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
