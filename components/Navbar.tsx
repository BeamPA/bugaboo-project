"use client";

import Link from "next/link";
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
      <nav className="navbar fixed left-0 top-0 z-1000000 w-full bg-bg-primary py-2 sm:py-2.5 lg:py-4.5 border-b border-border-secondary md:top-[72px]!">
        <div className="relative flex items-center px-4 md:px-8 xl:px-28 2xl:px-[144px]">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap items-center gap-6"></div>
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
                  className={`absolute left-0 border border-border-secondary bg-bg-primary rounded-sm shadow-md z-1000002 grid w-[356px] grid-cols-2 gap-3 px-3 py-3 origin-top ${
                    isOpen ? "dropdown-enter" : "dropdown-exit pointer-events-none"
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
          <div className="w-100 ml-auto flex flex-wrap content-center items-center gap-4 lg:gap-3 2xl:gap-6"></div>
        </div>
      </nav>
    </>
  );
}
