"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const menuItems = [
  {
    name: "ORIGINALS",
    href: "/originals/",
    icon: "M5.83334 1.6665V4.99984M5.83334 13.3332V16.6665M14.1667 3.33317V6.6665M14.1667 14.9998V18.3332M1.66667 4.99984H10M1.66667 13.3332H10M10 6.6665H18.3333M10 14.9998H18.3333M10 16.6665V2.99984C10 2.53313 10 2.29977 9.90918 2.12151C9.82928 1.96471 9.7018 1.83723 9.545 1.75733C9.36674 1.6665 9.13338 1.6665 8.66667 1.6665H5.66667C4.26654 1.6665 3.56647 1.6665 3.0317 1.93899C2.56129 2.17867 2.17884 2.56112 1.93916 3.03153C1.66667 3.56631 1.66667 4.26637 1.66667 5.6665V12.6665C1.66667 14.0666 1.66667 14.7667 1.93916 15.3015C2.17884 15.7719 2.56129 16.1543 3.0317 16.394C3.56647 16.6665 4.26654 16.6665 5.66667 16.6665H10ZM10 3.33317H14.3333C15.7335 3.33317 16.4335 3.33317 16.9683 3.60565C17.4387 3.84534 17.8212 4.22779 18.0609 4.69819C18.3333 5.23297 18.3333 5.93304 18.3333 7.33317V14.3332C18.3333 15.7333 18.3333 16.4334 18.0609 16.9681C17.8212 17.4386 17.4387 17.821 16.9683 18.0607C16.4335 18.3332 15.7335 18.3332 14.3333 18.3332H11.3333C10.8666 18.3332 10.6333 18.3332 10.455 18.2423C10.2982 18.1624 10.1707 18.035 10.0908 17.8782C10 17.6999 10 17.4665 10 16.9998V3.33317Z",
  },
  {
    name: "รายการสด",
    href: "/live/",
    icon: "M14.1667 2.5L10 5.83333L5.83335 2.5M5.66669 17.5H14.3334C15.7335 17.5 16.4336 17.5 16.9683 17.2275C17.4387 16.9878 17.8212 16.6054 18.0609 16.135C18.3334 15.6002 18.3334 14.9001 18.3334 13.5V9.83333C18.3334 8.4332 18.3334 7.73314 18.0609 7.19836C17.8212 6.72795 17.4387 6.3455 16.9683 6.10582C16.4336 5.83333 15.7335 5.83333 14.3334 5.83333H5.66669C4.26656 5.83333 3.56649 5.83333 3.03171 6.10582C2.56131 6.3455 2.17885 6.72795 1.93917 7.19836C1.66669 7.73314 1.66669 8.4332 1.66669 9.83333V13.5C1.66669 14.9001 1.66669 15.6002 1.93917 16.135C2.17885 16.6054 2.56131 16.9878 3.03171 17.2275C3.56649 17.5 4.26656 17.5 5.66669 17.5Z",
  },
  {
    name: "นักแสดง",
    href: "/stars/",
    icon: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
  },
  {
    name: "แฟนคลับ",
    href: "/fanclub/",
    icon: "M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z",
  },
  {
    name: "Short Series",
    href: "/shortseries/",
    icon: "M9 3L8 8M16 3L15 8M22 8H2M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z",
  },
  {
    name: "วาไรตี",
    href: "/variety/",
    icon: "M9 18V6.35537C9 5.87383 9 5.63306 9.0876 5.43778C9.16482 5.26565 9.28917 5.11887 9.44627 5.0144C9.62449 4.89588 9.86198 4.8563 10.337 4.77714L19.137 3.31047C19.7779 3.20364 20.0984 3.15023 20.3482 3.243C20.5674 3.32441 20.7511 3.48005 20.8674 3.68286C21 3.91398 21 4.23889 21 4.8887V16M9 18C9 19.6568 7.65685 21 6 21C4.34315 21 3 19.6568 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM21 16C21 17.6568 19.6569 19 18 19C16.3431 19 15 17.6568 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z",
  },
  {
    name: "บันเทิง",
    href: "/entertain/",
    icon: "M4 13.9999L5.57465 20.2985C5.61893 20.4756 5.64107 20.5642 5.66727 20.6415C5.92317 21.397 6.60352 21.9282 7.39852 21.9933C7.4799 21.9999 7.5712 21.9999 7.75379 21.9999C7.98244 21.9999 8.09677 21.9999 8.19308 21.9906C9.145 21.8982 9.89834 21.1449 9.99066 20.193C10 20.0967 10 19.9823 10 19.7537V5.49991M18.5 13.4999C20.433 13.4999 22 11.9329 22 9.99991C22 8.06691 20.433 6.49991 18.5 6.49991M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z",
  },
  {
    name: "ตรวจสลาก",
    href: "/lotto/",
    icon: "M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z",
  },
  {
    name: "ไลฟ์สไตล์",
    href: "/lifestyle/",
    icon: "M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z",
  },
  {
    name: "อีเวนต์",
    href: "/event/",
    icon: "M10.25 5.49991H6.5C4.01472 5.49991 2 7.51463 2 9.99991C2 12.4852 4.01472 14.4999 6.5 14.4999H10.25C12.0164 14.4999 14.1772 15.4468 15.8443 16.3556C16.8168 16.8857 17.3031 17.1508 17.6216 17.1118C17.9169 17.0756 18.1402 16.943 18.3133 16.701C18.5 16.4401 18.5 15.9179 18.5 14.8736V5.1262C18.5 4.08191 18.5 3.55976 18.3133 3.2988C18.1402 3.05681 17.9169 2.92421 17.6216 2.88804C17.3031 2.84903 16.8168 3.11411 15.8443 3.64427C14.1772 4.55302 12.0164 5.49991 10.25 5.49991Z",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar bg-white fixed left-0 top-0 z-1000000 w-full bg-bg-primary py-2 sm:py-2.5 lg:py-4.5 border-b border-border-secondary md:top-[72px]!">
        <div className="relative flex items-center px-4 md:px-8 xl:px-28 2xl:px-[144px]">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap content-center gap-2.5 sm:gap-3 items-center">
              <div className="flex xl:hidden">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 py-2 h-15 w-15 rounded-md px-2.5"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    className="size-6 stroke-button-tertiary-fg stroke-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H21"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <Link className="flex flex-col" href="/">
                <Image
                  alt="Bugaboo Logo"
                  fetchPriority="high"
                  width={200}
                  height={37}
                  className="bugaboo-logo h-9 w-[100px] sm:h-[38px] sm:w-[124px] lg:h-11 lg:w-[148px] grayscale"
                  src="https://image-sapp-prod.bugaboo.tv/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwiZWRpdHMiOnt9LCJrZXkiOiJpY29uL2J1Z2Fib28tbG9nby5zdmcifQ=="
                  style={{ color: "transparent" }}
                  unoptimized
                />
              </Link>
            </div>
            <div className="hidden items-center gap-6 xl:flex">
              <Link
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-button-tertiary-fg hover:text-button-tertiary-fg_hover"
                href="/drama/"
              >
                ละคร
              </Link>
              <Link
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-button-tertiary-fg hover:text-button-tertiary-fg_hover"
                href="/movies-series/"
              >
                หนัง / ซีรีส์
              </Link>
              <Link
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-button-tertiary-fg hover:text-button-tertiary-fg_hover"
                href="/news/"
              >
                ข่าว
              </Link>
              <Link
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-button-tertiary-fg hover:text-button-tertiary-fg_hover"
                href="/sport/"
              >
                กีฬา
              </Link>
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsOpen(!isOpen)}
                  className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-button-tertiary-fg hover:text-button-tertiary-fg_hover transition-colors inline-flex items-center"
                  type="button"
                >
                  อื่น ๆ
                  <svg
                    className={`ml-2 size-6 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  ref={dropdownRef}
                  className={`bg-white absolute left-0 border border-border-secondary bg-bg-primary rounded-sm shadow-md z-1000002 grid w-[356px] grid-cols-2 gap-3 px-3 py-3 origin-top ${
                    isOpen
                      ? "dropdown-enter"
                      : "dropdown-exit pointer-events-none"
                  }`}
                  style={{
                    top: "46px",
                  }}
                >
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex h-10 cursor-pointer items-center justify-start gap-3 px-3 py-3 text-sm font-medium transition-all duration-150 hover:bg-bg-secondary_hover rounded-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        className="h-5 w-5 stroke-fg-brand-purple-secondary-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={item.icon}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke="#823DFF"
                        />
                      </svg>
                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-text-primary-900">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 ml-auto flex flex-wrap content-center items-center gap-4 lg:gap-3 2xl:gap-6">
            <div className="flex content-center items-center">
              <div className="flex h-11 w-11 flex-wrap content-center items-center justify-center p-1.5">
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-button-tertiary-fg hover:stroke-button-tertiary-fg_hover"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="flex h-11 w-11 flex-wrap content-center items-center justify-center p-2.5 xl:hidden">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 p-0 xl:hidden">
                  <svg
                    className="size-6 fill-none stroke-button-tertiary-fg"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="hidden">
                  <div className="grid w-full gap-6 px-6 py-4 sm:w-1/2">
                    <Link
                      className="rounded-md border-2 bg-button-secondary-bg px-4 py-2.5 text-center text-button-secondary-fg font-semibold text-sm lg:text-base leading-4 lg:leading-5"
                      href="https://www.bugaboo.tv/th/auth/signin/"
                    >
                      เข้าสู่ระบบ
                    </Link>
                    <Link
                      className="border-gradient relative flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-button-secondary-purple-fg font-semibold text-sm lg:text-base leading-4 lg:leading-5"
                      aria-expanded="false"
                      aria-haspopup="true"
                      href="https://shop.bugaboo.tv"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 fill-none stroke-button-secondary-purple-fg"
                      >
                        <path
                          d="M4.5 13.0869V19.2504C4.5 19.8026 4.94772 20.2504 5.5 20.2504H18.5C19.0523 20.2504 19.5 19.8026 19.5 19.2504V13.0869M10 20V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V20M21 9L19.6584 4.29375C19.6136 4.13711 19.519 3.99932 19.389 3.90122C19.2589 3.80311 19.1004 3.75003 18.9375 3.75H5.0625C4.90006 3.75064 4.74222 3.804 4.61272 3.90206C4.48321 4.00012 4.38904 4.13757 4.34438 4.29375L3 9M21 9H3M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5M3 9V10.5C3 11.2956 3.31607 12.0587 3.87868 12.6213C4.44129 13.1839 5.20435 13.5 6 13.5C6.79565 13.5 7.55871 13.1839 8.12132 12.6213C8.68393 12.0587 9 11.2956 9 10.5M9 9V10.5M9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5M15 9V10.5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      ช็อป
                    </Link>
                    <Link
                      className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 bg-button-gradient relative flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-white"
                      aria-expanded="false"
                      aria-haspopup="true"
                      href="/subscription-plan/"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 fill-white stroke-white"
                      >
                        <path d="M11.9983 7.1001C11.8751 7.09988 11.754 7.13254 11.6469 7.19488C11.5397 7.25721 11.4501 7.34708 11.387 7.45567L9.02161 11.5465L6.1608 9.13591C6.04635 9.03966 5.9055 8.98249 5.7579 8.97238C5.6103 8.96226 5.4633 8.99971 5.33741 9.07949C5.21153 9.15927 5.11302 9.27741 5.05564 9.41744C4.99826 9.55746 4.98486 9.71238 5.01731 9.8606L6.43835 16.3322C6.47405 16.4934 6.56201 16.6374 6.68782 16.7406C6.81363 16.8438 6.96982 16.9 7.13083 16.9001H16.8658C17.0271 16.9005 17.1838 16.8445 17.31 16.7412C17.4363 16.638 17.5245 16.4938 17.5603 16.3322L18.982 9.8606C19.0152 9.71189 19.0022 9.55625 18.9448 9.41555C18.8874 9.27485 18.7884 9.15616 18.6619 9.07619C18.5354 8.99621 18.3877 8.95896 18.2395 8.96967C18.0913 8.98039 17.9501 9.03852 17.8358 9.13591L14.9778 11.5465L12.6096 7.45567C12.5464 7.34708 12.4569 7.25721 12.3497 7.19488C12.2426 7.13254 12.1215 7.09988 11.9983 7.1001Z"></path>
                      </svg>
                      พรีเมียม
                    </Link>
                    <div className="flex flex-col gap-1">
                      <Link
                        className="flex flex-row gap-4 px-3 py-3"
                        href="https://www.bugaboo.tv/th/setting/"
                      >
                        <svg
                          className="size-5 stroke-fg-brand-purple-secondary-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        ตั้งค่าการใช้งาน
                      </Link>
                      <Link
                        className="flex flex-row gap-4 px-3 py-3"
                        href="https://www.bugaboo.tv/th/privacy-policy/"
                      >
                        <svg
                          className="size-5 stroke-fg-brand-purple-secondary-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-text-primary-900">
                          นโยบายความเป็นส่วนตัว
                        </div>
                      </Link>
                      <Link
                        className="flex flex-row gap-4 px-3 py-3"
                        href="https://www.bugaboo.tv/th/help-center/"
                      >
                        <svg
                          className="size-5 stroke-fg-brand-purple-secondary-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-text-primary-900">
                          ศูนย์ช่วยเหลือ
                        </div>
                      </Link>
                    </div>
                    <div className="border-b border-border-secondary"></div>
                    <div className="flex flex-col gap-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden h-11 border-l-2 md:block"></div>
            <div className="flex gap-3">
              <Link
                target="_blank"
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 border-gradient relative flex max-h-11 items-center gap-2 rounded-md border p-2 text-[#823dff] md:px-4 md:py-2.5"
                aria-expanded="false"
                aria-haspopup="true"
                href="https://shop.bugaboo.tv"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 fill-none stroke-[#823dff]"
                >
                  <path
                    d="M4.5 13.0869V19.2504C4.5 19.8026 4.94772 20.2504 5.5 20.2504H18.5C19.0523 20.2504 19.5 19.8026 19.5 19.2504V13.0869M10 20V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V20M21 9L19.6584 4.29375C19.6136 4.13711 19.519 3.99932 19.389 3.90122C19.2589 3.80311 19.1004 3.75003 18.9375 3.75H5.0625C4.90006 3.75064 4.74222 3.804 4.61272 3.90206C4.48321 4.00012 4.38904 4.13757 4.34438 4.29375L3 9M21 9H3M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5M3 9V10.5C3 11.2956 3.31607 12.0587 3.87868 12.6213C4.44129 13.1839 5.20435 13.5 6 13.5C6.79565 13.5 7.55871 13.1839 8.12132 12.6213C8.68393 12.0587 9 11.2956 9 10.5M9 9V10.5M9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5M15 9V10.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="hidden md:block">ช็อป</span>
              </Link>
              <Link
                className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 bg-button-gradient relative flex items-center gap-2 rounded-md px-2.5 py-2 text-white md:px-4 md:py-2.5"
                href="https://www.bugaboo.tv/th/subscription-plan/"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 fill-white stroke-white"
                >
                  <path d="M11.9983 7.1001C11.8751 7.09988 11.754 7.13254 11.6469 7.19488C11.5397 7.25721 11.4501 7.34708 11.387 7.45567L9.02161 11.5465L6.1608 9.13591C6.04635 9.03966 5.9055 8.98249 5.7579 8.97238C5.6103 8.96226 5.4633 8.99971 5.33741 9.07949C5.21153 9.15927 5.11302 9.27741 5.05564 9.41744C4.99826 9.55746 4.98486 9.71238 5.01731 9.8606L6.43835 16.3322C6.47405 16.4934 6.56201 16.6374 6.68782 16.7406C6.81363 16.8438 6.96982 16.9 7.13083 16.9001H16.8658C17.0271 16.9005 17.1838 16.8445 17.31 16.7412C17.4363 16.638 17.5245 16.4938 17.5603 16.3322L18.982 9.8606C19.0152 9.71189 19.0022 9.55625 18.9448 9.41555C18.8874 9.27485 18.7884 9.15616 18.6619 9.07619C18.5354 8.99621 18.3877 8.95896 18.2395 8.96967C18.0913 8.98039 17.9501 9.03852 17.8358 9.13591L14.9778 11.5465L12.6096 7.45567C12.5464 7.34708 12.4569 7.25721 12.3497 7.19488C12.2426 7.13254 12.1215 7.09988 11.9983 7.1001Z"></path>
                </svg>
                <span className="hidden md:block">พรีเมียม</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
