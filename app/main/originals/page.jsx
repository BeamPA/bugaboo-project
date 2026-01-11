"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OriginalsPage() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const updateArrows = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateArrows);
    updateArrows();

    return () => carousel.removeEventListener("scroll", updateArrows);
  }, []);

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

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          'url("/assets/images/bg/highlight-content-section-bg.png")',
      }}
    >
      <div className="flex flex-col py-8 px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-[144px] gap-8">
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold text-white">ORIGINALS</h1>
          <a
            target="_self"
            className="flex items-center ml-2 gap-2 text-[#C2B8FF]"
            href="/drama/"
          >
            <span className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
              ดูทั้งหมด
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-[#C2B8FF]"
              stroke="currentColor"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="relative flex flex-col py-8 px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-[144px] gap-8" role="region" aria-roledescription="carousel">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-20 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-24 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </button>
        )}

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 -ml-4 pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {items.map((item, index) => (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 pl-4 basis-[44%] sm:basis-[24%] lg:basis-1/6 xl:basis-1/6 2xl:basis-[12.5%]"
            >
              <div className="relative flex flex-col gap-3">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex flex-col gap-3">
                    <div className="relative">
                      <img
                        alt={item.title}
                        draggable
                        loading="lazy"
                        width={210}
                        height={310}
                        decoding="async"
                        className="aspect-[10/16] w-full rounded-lg object-cover"
                        src={item.img}
                        style={{ color: "transparent" }}
                      />
                    </div>

                    <div className="absolute top-0 pl-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="45"
                        viewBox="0 0 35 45"
                        fill="none"
                      >
                        <path
                          d="M31 0C33.2091 0 35 1.79086 35 4V36.5028C35 38.2545 33.8603 39.8024 32.1876 40.3224L18.3551 44.6231C17.5663 44.8683 16.721 44.8634 15.9351 44.6089L2.76756 40.3443C1.11762 39.81 0 38.2732 0 36.5389V4C0 1.79086 1.79086 0 4 0L31 0Z"
                          fill="url(#paint0_linear_13357_77530)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_13357_77530"
                            x1="0.000215438"
                            y1="-0.000700784"
                            x2="43.6158"
                            y2="33.9225"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#811CFF" />
                            <stop offset="1" stopColor="#53B1FD" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="font-semibold text-base lg:text-lg leading-5 lg:leading-6 absolute bottom-2.5 text-text-white lg:bottom-2 pl-3.5 lg:pl-3">
                        {index + 1}
                      </div>
                    </div>

                    <div>
        
                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 line-clamp-2 text-white">
                        {item.title}
                      </div>
                     
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
