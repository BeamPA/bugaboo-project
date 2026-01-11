"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    type: "ดรามา",
    title: "เภตรานฤมิต",
    episodes: "17 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW50ZXItZHJhbWEvZHJhbWEvMjAyNS8wMi8yNi8xNzQwNTUxMzYxODE5LThiN2RkNDE1LTI1YzgtNGNiYy1hODE1LTgwZTNjZDhmYjc5NjU2ODc3MDY2MjQ5NjQ2MzM0MjMtbC5qcGVnIn0=",
    href: "/drama/pae-tra-na-rue-mith/",
  },
  {
    type: "ดรามา",
    title: "ตะกรุดโทน",
    episodes: "16 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW50ZXItZHJhbWEvZHJhbWEvMjAyNS8wMi8yNy8xNzQwNTg5NzU3OTkzLWJlMWFmNDRkLWQwY2MtNGY3NS05M2U4LTZkNmJmMjc3ZjFkZDU1MjgzMDk3NzM5ODQ5MTU3MDgtbC5qcGVnIn0=",
    href: "/drama/ta-krud-tone/",
  },
  {
    type: "ดรามา",
    title: "เสาร์ 5",
    episodes: "18 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW50ZXItZHJhbWEvZHJhbWEvMjAyNS8wMi8yNi8xNzQwNTg3MzUxMDg4LWFmYzk1M2QzLTQzMWMtNDg2NS04MWMyLWY3Y2ZlOWNiMWNjNzYxOTg4MTg4NjcwNzM0MDg0OTctbC5qcGVnIn0=",
    href: "/drama/sao-5/",
  },
  {
    type: "ดรามา",
    title: "ในรอยทราย",
    episodes: "15 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW50ZXItZHJhbWEvZHJhbWEvMjAyNS8wMi8yNi8xNzQwNTUwMzE1MDg1LTM1NmQxOThlLWY1MGUtNGI3Yy1iNTljLWQxMGQ2ODI5YjUxMTM4Mzk2NDgzOTQyODg2Mjg1NzUtbC5qcGVnIn0=",
    href: "/drama/nai-roy-tai/",
  },
  {
    type: "ดรามา",
    title: "เพลิงพระนาง",
    episodes: "26 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW50ZXItZHJhbWEvZHJhbWEvMjAyNS8wMi8yNi8xNzQwNTY3NTU3NzQzLWMyNjUyMzI4LTUwY2EtNGE3ZC1iMDE3LWFhMWQxYmNlOGM3YTQwNDQ5MzM4MzcyMDQzNDczNTItbC5qcGVnIn0=",
    href: "/drama/the-royal-fire/",
  },
  {
    type: "ดรามา",
    title: "มวยไทย 7 สี",
    episodes: "228 คลิป",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW1hZ2VzLzIwMjUvMy8xNi9pbWdfMTc0MjEzNTMwMjM1OF95Znd0NmVvY3MuanBlZyJ9",
    href: "/variety/muaythai7see/",
  },
  {
    type: "ดรามา",
    title: "WALK in",
    episodes: "105 คลิป",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiYnVnYWJvby1jYXRlZ29yeS8yMDI1LzAzLzE1LzE3NDIwNTM1Mjg4NjYtbmV3X3Byb2plY3RfMTcwMDQ2NDcxMl83NDQxLmpwZyJ9",
    href: "/variety/walkin/",
  },
  {
    type: "ดรามา",
    title: "ทำดีได้ดี",
    episodes: "30 คลิป",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW1hZ2VzLzIwMjUvNi8xOC9pbWdfMTc1MDIzNzI4NDg3N19oZ2pzZjl3dWcuanBlZyJ9",
    href: "/variety/Thdeeaiddee/",
  },
  {
    type: "ดรามา",
    title: "เสียงจากหลุม",
    episodes: "47 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW1hZ2VzLzIwMjUvMy8xNy9pbWdfMTc0MjIxMTA0NDQyOF9iOXFjYXR4djIuanBlZyJ9",
    href: "/originals/siangchaklum/",
  },
  {
    type: "ดรามา",
    title: "ติดลมบน",
    episodes: "35 ตอน",
    img: "https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fSwia2V5IjoiaW1hZ2VzLzIwMjUvMy8xNy9pbWdfMTc0MjIwODE3MTk4NV92anU1cWlsZDMuanBlZyJ9",
    href: "/originals/tidlombon/",
  },
];

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
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col min-w-[300px] sm:min-w-[600px] lg:min-w-[800px]"
                  >
                    <a
                      href={item.href}
                      className="h-80 bg-white shadow rounded-xl overflow-hidden relative"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </a>

                    <div className="mt-2 px-2">
                      <div className="text-lg font-bold text-text-primary-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-text-primary-700">
                        {item.episodes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">เนื้อหามาใหม่</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {items.slice(0, 6).map((item, index) => (
              <div key={index} className="flex flex-col">
                <a
                  href={item.href}
                  className="h-48 bg-white rounded-xl shadow overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </a>

                <div className="mt-2 px-2">
                  <div className="text-lg font-bold text-text-primary-900">
                    {item.title}
                  </div>
                  <div className="text-sm text-text-primary-700">
                    {item.episodes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
