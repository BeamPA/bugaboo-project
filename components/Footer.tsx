import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="dark mt-11 w-full bg-[#17072b]">
      <div className="flex h-full w-full flex-col gap-10 px-4 py-8 sm:px-8 lg:px-8 lg:py-16 xl:px-28 2xl:px-[144px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col gap-4 lg:w-1/5">
            <div className="w-[176px] h-[30px] text-[#f5f5f6] text-2xl font-bold flex gap-2">
              BUGABOO{" "}
              <div className="text-black bg-[#f5f5f6] p-0.5 w-fit rounded-lg">
                TV
              </div>
            </div>
            <div className="font-normal text-xs lg:text-sm leading-3 lg:leading-4 text-[#f5f5f6]">
              ดูละครย้อนหลัง โปรแกรมถ่ายทอดสดฟุตบอล คลิปรายการทีวีย้อนหลัง
              ดูหนังออนไลน์
            </div>
            <div className="flex gap-5">
              <a
                target="_blank"
                title="Facebook"
                href="https://www.facebook.com/Bugaboo.TV"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1027_1516)">
                    <path
                      d="M24 12.0733C24 5.40541 18.6274 0 12 0C5.37258 0 0 5.40541 0 12.0733C0 18.0994 4.3882 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6576 4.71615C15.9701 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.34 7.92313 13.875 8.85386 13.875 9.80958V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0994 24 12.0733Z"
                      fill="#1877F2"
                    ></path>
                    <path
                      d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1027_1516">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                target="_blank"
                title="X (Twitter)"
                href="https://twitter.com/bugabootv"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="url(#clip0_2157_21756)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9457 21L8.39629 13.0901L1.44911 21H-1.48999L7.09233 11.2311L-1.48999 -1H6.05596L11.2862 6.45502L17.8395 -1H20.7786L12.5946 8.31648L21.4917 21H13.9457ZM17.2187 18.77H15.24L2.71836 1.23H4.69735L9.71236 8.25316L10.5796 9.47186L17.2187 18.77Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2157_21756">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                target="_blank"
                title="Instagram"
                href="https://www.instagram.com/bugaboo.tv"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="6.85714"
                    fill="url(#paint0_radial_2157_21760)"
                  ></rect>
                  <rect
                    width="20"
                    height="20"
                    rx="6.85714"
                    fill="url(#paint1_radial_2157_21760)"
                  ></rect>
                  <rect
                    width="20"
                    height="20"
                    rx="6.85714"
                    fill="url(#paint2_radial_2157_21760)"
                  ></rect>
                  <path
                    d="M15 6.07171C15 6.66344 14.5203 7.14314 13.9286 7.14314C13.3368 7.14314 12.8571 6.66344 12.8571 6.07171C12.8571 5.47997 13.3368 5.00028 13.9286 5.00028C14.5203 5.00028 15 5.47997 15 6.07171Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 13.5717C11.9724 13.5717 13.5714 11.9727 13.5714 10.0003C13.5714 8.02783 11.9724 6.42885 10 6.42885C8.02756 6.42885 6.42858 8.02783 6.42858 10.0003C6.42858 11.9727 8.02756 13.5717 10 13.5717ZM10 12.1431C11.1835 12.1431 12.1429 11.1837 12.1429 10.0003C12.1429 8.81681 11.1835 7.85742 10 7.85742C8.81654 7.85742 7.85715 8.81681 7.85715 10.0003C7.85715 11.1837 8.81654 12.1431 10 12.1431Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.85715 9.71456C2.85715 7.31434 2.85715 6.11423 3.32426 5.19746C3.73515 4.39105 4.39078 3.73542 5.19719 3.32454C6.11395 2.85742 7.31406 2.85742 9.71429 2.85742H10.2857C12.6859 2.85742 13.8861 2.85742 14.8028 3.32454C15.6092 3.73542 16.2649 4.39105 16.6757 5.19746C17.1429 6.11423 17.1429 7.31434 17.1429 9.71456V10.286C17.1429 12.6862 17.1429 13.8863 16.6757 14.8031C16.2649 15.6095 15.6092 16.2651 14.8028 16.676C13.8861 17.1431 12.6859 17.1431 10.2857 17.1431H9.71429C7.31406 17.1431 6.11395 17.1431 5.19719 16.676C4.39078 16.2651 3.73515 15.6095 3.32426 14.8031C2.85715 13.8863 2.85715 12.6862 2.85715 10.286V9.71456ZM9.71429 4.28599H10.2857C11.5094 4.28599 12.3413 4.2871 12.9842 4.33964C13.6105 4.39081 13.9308 4.48356 14.1543 4.5974C14.6919 4.87133 15.129 5.30841 15.4029 5.84602C15.5167 6.06945 15.6095 6.38974 15.6606 7.01605C15.7132 7.65903 15.7143 8.49088 15.7143 9.71456V10.286C15.7143 11.5097 15.7132 12.3415 15.6606 12.9845C15.6095 13.6108 15.5167 13.9311 15.4029 14.1545C15.129 14.6921 14.6919 15.1292 14.1543 15.4032C13.9308 15.517 13.6105 15.6097 12.9842 15.6609C12.3413 15.7135 11.5094 15.7146 10.2857 15.7146H9.71429C8.4906 15.7146 7.65876 15.7135 7.01577 15.6609C6.38946 15.6097 6.06917 15.517 5.84575 15.4032C5.30814 15.1292 4.87105 14.6921 4.59713 14.1545C4.48329 13.9311 4.39053 13.6108 4.33936 12.9845C4.28683 12.3415 4.28572 11.5097 4.28572 10.286V9.71456C4.28572 8.49088 4.28683 7.65903 4.33936 7.01605C4.39053 6.38974 4.48329 6.06945 4.59713 5.84602C4.87105 5.30841 5.30814 4.87133 5.84575 4.5974C6.06917 4.48356 6.38946 4.39081 7.01577 4.33964C7.65876 4.2871 8.4906 4.28599 9.71429 4.28599Z"
                    fill="white"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_2157_21760"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(7.14286 15) rotate(-55.3758) scale(18.2283)"
                    >
                      <stop stopColor="#B13589"></stop>
                      <stop offset="0.79309" stopColor="#C62F94"></stop>
                      <stop offset="1" stopColor="#8A3AC8"></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_2157_21760"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(6.42857 20.7143) rotate(-65.1363) scale(16.1387)"
                    >
                      <stop stopColor="#E0E8B7"></stop>
                      <stop offset="0.444662" stopColor="#FB8A2E"></stop>
                      <stop offset="0.71474" stopColor="#E2425C"></stop>
                      <stop
                        offset="1"
                        stopColor="#E2425C"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_2157_21760"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-1.07143 0.714286) rotate(-8.1301) scale(27.7792 5.94168)"
                    >
                      <stop offset="0.156701" stopColor="#406ADC"></stop>
                      <stop offset="0.467799" stopColor="#6A45BE"></stop>
                      <stop
                        offset="1"
                        stopColor="#6A45BE"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              <a
                target="_blank"
                title="Tiktok"
                href="https://www.tiktok.com/@bugaboo.tv"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3135 7.21939C15.5996 8.14204 17.1752 8.6849 18.8769 8.6849V5.39868C18.5548 5.39875 18.2336 5.36505 17.9186 5.29805V7.88478C16.217 7.88478 14.6416 7.34191 13.3552 6.41934V13.1256C13.3552 16.4804 10.6452 19.1998 7.30257 19.1998C6.05534 19.1998 4.89609 18.8214 3.93311 18.1724C5.0322 19.3002 6.56497 19.9998 8.26071 19.9998C11.6036 19.9998 14.3137 17.2804 14.3137 13.9255V7.21939H14.3135ZM15.4957 3.904C14.8385 3.18336 14.4069 2.25207 14.3135 1.22248V0.799805H13.4054C13.6339 2.10841 14.4137 3.2264 15.4957 3.904ZM6.04735 15.598C5.68012 15.1148 5.48167 14.5237 5.48255 13.9159C5.48255 12.3815 6.72206 11.1374 8.25127 11.1374C8.53627 11.1374 8.81955 11.1812 9.09115 11.2676V7.90798C8.77375 7.86433 8.45342 7.84579 8.13322 7.85259V10.4676C7.86142 10.3811 7.578 10.3372 7.29293 10.3375C5.76372 10.3375 4.52428 11.5814 4.52428 13.116C4.52428 14.201 5.14383 15.1404 6.04735 15.598Z"
                    fill="#FF004F"
                  ></path>
                  <path
                    d="M13.3554 6.41927C14.6419 7.34185 16.2172 7.88471 17.9188 7.88471V5.29799C16.969 5.09495 16.1281 4.59684 15.4959 3.904C14.4138 3.22633 13.6342 2.10834 13.4056 0.799805H11.0201V13.9253C11.0147 15.4555 9.77728 16.6945 8.25135 16.6945C7.35214 16.6945 6.55329 16.2644 6.04735 15.598C5.14391 15.1404 4.52436 14.2009 4.52436 13.116C4.52436 11.5816 5.7638 10.3375 7.29301 10.3375C7.586 10.3375 7.8684 10.3833 8.13329 10.4677V7.85266C4.84934 7.92075 2.20825 10.6136 2.20825 13.9254C2.20825 15.5787 2.86594 17.0774 3.93339 18.1724C4.89637 18.8214 6.05562 19.1998 7.30285 19.1998C10.6456 19.1998 13.3555 16.4803 13.3555 13.1256V6.41927H13.3554Z"
                    fill="black"
                  ></path>
                  <path
                    d="M17.9188 5.29817V4.59874C17.0623 4.60004 16.2226 4.35932 15.496 3.90411C16.1392 4.61089 16.9863 5.09822 17.9188 5.29817ZM13.4056 0.799986C13.3838 0.674926 13.367 0.549042 13.3554 0.422678V0H10.0617V13.1257C10.0564 14.6556 8.8191 15.8946 7.29303 15.8946C6.845 15.8946 6.42199 15.7879 6.04737 15.5983C6.55331 16.2645 7.35216 16.6946 8.25137 16.6946C9.77717 16.6946 11.0148 15.4558 11.0201 13.9256V0.799986H13.4056ZM8.13345 7.85284V7.10824C7.85823 7.07049 7.58076 7.05155 7.30294 7.05169C3.95993 7.05162 1.25 9.77116 1.25 13.1257C1.25 15.2288 2.31505 17.0822 3.93347 18.1725C2.86603 17.0775 2.20834 15.5787 2.20834 13.9255C2.20834 10.6138 4.84936 7.92093 8.13345 7.85284Z"
                    fill="#00F2EA"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                title="Youtube"
                href="https://www.youtube.com/channel/UCrUdsmNE244FwdhFZ242YkA"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="url(#clip0_2157_21771)">
                    <path
                      d="M19.6017 5.1541C19.4886 4.72861 19.2657 4.34029 18.9554 4.02798C18.6451 3.71568 18.2582 3.49035 17.8335 3.37456C16.2698 2.9541 10.0198 2.9541 10.0198 2.9541C10.0198 2.9541 3.76984 2.9541 2.2062 3.37456C1.78144 3.49035 1.39455 3.71568 1.08424 4.02798C0.773933 4.34029 0.551091 4.72861 0.438018 5.1541C0.0198365 6.72456 0.0198364 9.99956 0.0198364 9.99956C0.0198364 9.99956 0.0198365 13.2746 0.438018 14.845C0.551091 15.2705 0.773933 15.6588 1.08424 15.9711C1.39455 16.2834 1.78144 16.5088 2.2062 16.6246C3.76984 17.045 10.0198 17.045 10.0198 17.045C10.0198 17.045 16.2698 17.045 17.8335 16.6246C18.2582 16.5088 18.6451 16.2834 18.9554 15.9711C19.2657 15.6588 19.4886 15.2705 19.6017 14.845C20.0198 13.2746 20.0198 9.99956 20.0198 9.99956C20.0198 9.99956 20.0198 6.72456 19.6017 5.1541Z"
                      fill="#FF0302"
                    ></path>
                    <path
                      d="M7.97446 12.9741V7.02637L13.2017 10.0002L7.97446 12.9741Z"
                      fill="#FEFEFE"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2157_21771">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-6 sm:flex-nowrap lg:w-4/5 lg:gap-8">
            {/* ละคร */}
            <div className="flex w-full flex-col gap-4 sm:w-1/4">
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 flex items-center justify-between text-[#94969c]">
                ละคร
                <svg
                  className="size-6 stroke-[#f0f1f1] sm:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 origin-top transform flex-col gap-3 text-[#f0f1f1] transition-all duration-1000 ease-in-out sm:flex hidden">
                <Link href="https://www.bugaboo.tv/th/drama/">ละครมาใหม่</Link>
                <Link href="https://www.bugaboo.tv/th/drama/all/program/dramahighlight/">
                  ไฮไลต์ละคร
                </Link>
                <Link href="https://www.bugaboo.tv/th/drama/">รวมละครย้อนหลัง</Link>
                <Link href="https://www.bugaboo.tv/th/drama/all/drama-promote-synopsis/">
                  เรื่องย่อละคร
                </Link>
              </div>
            </div>

            {/* หนัง/ซีรีส์ */}
            <div className="flex w-full flex-col gap-4 sm:w-1/4">
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 flex items-center justify-between text-[#94969c]">
                หนัง/ซีรีส์
                <svg
                  className="size-6 stroke-[#f0f1f1] sm:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 origin-top transform flex-col gap-3 text-[#f0f1f1] transition-all duration-1000 ease-in-out sm:flex hidden">
                <Link href="https://www.bugaboo.tv/th/movies-series/">ดูหนังฟรี</Link>
                <Link href="https://www.bugaboo.tv/th/series/all/">ซีรีส์มาใหม่</Link>
                <Link href="https://www.bugaboo.tv/th/documentary/all/">สารคดี</Link>
                <Link href="https://www.bugaboo.tv/th/reviews/all/program/movie-reviews/">
                  รีวีวหนัง
                </Link>
              </div>
            </div>

            {/* ORIGINALS */}
            <div className="flex w-full flex-col gap-4 sm:w-1/4">
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 flex items-center justify-between text-[#94969c]">
                ORIGINALS
                <svg
                  className="size-6 stroke-[#f0f1f1] sm:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 origin-top transform flex-col gap-3 text-[#f0f1f1] transition-all duration-1000 ease-in-out sm:flex hidden">
                <Link href="https://www.bugaboo.tv/th/originals/">ORIGINALS มาใหม่</Link>
                <Link href="https://www.bugaboo.tv/th/originals/all/ch7/">7HD ORIGINALS</Link>
                <Link href="https://www.bugaboo.tv/th/originals/all/bugaboo/">BUGABOO ORIGINALS</Link>
                <Link href="https://www.bugaboo.tv/th/original-series/all/">ORIGINALS ซีรีส์</Link>
              </div>
            </div>

            {/* วาไรตี */}
            <div className="flex w-full flex-col gap-4 sm:w-1/4">
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 flex items-center justify-between text-[#94969c]">
                วาไรตี
                <svg
                  className="size-6 stroke-[#f0f1f1] sm:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 origin-top transform flex-col gap-3 text-[#f0f1f1] transition-all duration-1000 ease-in-out sm:flex hidden">
                <Link href="https://www.bugaboo.tv/th/variety/">รายการมาใหม่</Link>
                <Link href="https://www.bugaboo.tv/th/lifestyle/all/category/Travel+Destination/">
                  ที่เที่ยวแนะนำ
                </Link>
                <Link href="https://www.bugaboo.tv/th/lifestyle/all/category/Cafe/">คาเฟ่แนะนำ</Link>
                <Link href="https://www.bugaboo.tv/th/variety/all/category/Tech+Shows/">
                  เทคโนโลยี
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-wrap gap-1 text-[#f0f1f1] lg:max-w-[510px]">
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/terms-and-conditions/"
              >
                ข้อกำหนดและเงื่อนไขการใช้งาน
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/terms-payment/"
              >
                ข้อกำหนดและเงื่อนไขการชำระเงิน
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/privacy-policy/"
              >
                นโยบายคุ้มครองข้อมูลส่วนบุคคล
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/cookie-policy/"
              >
                นโยบายการใช้คุกกี้
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/corporate-info/"
              >
                ข้อมูลบริษัท
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/help-center/"
              >
                ศูนย์ช่วยเหลือ
              </Link>
            </div>
            <div className="footer-information-items">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.bugaboo.tv/th/partners/"
              >
                พันธมิตร
              </Link>
            </div>
          </div>
          <div className="flex w-fit flex-wrap justify-start gap-4">
            <div className="w-max">
              <Link
                target="_blank"
                href="https://itunes.apple.com/us/app/bugaboo-inter/id1319756939?ls=1&amp;mt=8"
              >
                <Image
                  src="https://bof-shortseries.bugaboo.tv/images/App-Store-Badge.png"
                  alt="apple store"
                  title="apple store"
                  fetchPriority="high"
                  width={135}
                  height={40}
                  className="h-auto w-[135x] sm:w-[135px] lg:w-[135x]"
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>

            <div className="w-max">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.bbtv.bugabootvinter"
              >
                <Image
                  src="https://bof-shortseries.bugaboo.tv/images/Google-Play-Badge.png"
                  alt="google play"
                  title="google play"
                  fetchPriority="high"
                  width={135}
                  height={40}
                  className="h-auto w-[135x] sm:w-[135px] lg:w-[135x]"
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>

            <div className="w-max">
              <Link
                target="_blank"
                href="https://appgallery.huawei.com/app/C101072713"
              >
                <Image
                  src="https://bof-shortseries.bugaboo.tv/images/Huawel-AppGallery-Badge.png"
                  alt="Huawei"
                  title="Huawei"
                  fetchPriority="high"
                  width={135}
                  height={40}
                  className="h-auto w-[135x] sm:w-[135px] lg:w-[135x]"
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-1 border-t-2 border-[#333741] pt-8 text-left text-[#94969c]">
          <p className="flex flex-wrap gap-x-1">
            © BUGABOO.TV Official Site. Copyright © 2026 BBTV New Media Co.,Ltd.
            All rights reserved.
          </p>
          <div className="pl-1 text-sm">(version 1.121.37)</div>
        </div>
      </div>
    </footer>
  );
}
