import TopPage from "./main/top/page";
import HighlightsPage from "./main/highlights/page";
import TagsPage from "./main/tags/page";
import ChannelPage from "./main/channel/page";
import DramaPage from "./main/drama/page";
import ActionPage from "./main/action/page";
import ShortseriesPage from "./main/shortseries/page";
import OriginalsPage from "./main/originals/page";

export default function Home() {
  return (
    <main className="min-h-screen mt-[82px]">
      <section
        className="flex flex-col mb-11 lg:flex-row gap-8 lg:px-8 lg:pt-10 xl:px-28 2xl:px-[144px]"
        id="highlight-section"
      >
        <div
          className="absolute left-0 top-18 h-220 w-1/2 bg-cover bg-center -z-10"
          style={{
            backgroundImage: 'url("/assets/images/bg/bg-top-left.png")',
          }}
        />

        <div
          className="absolute right-0 top-18 h-220 w-1/2 bg-cover bg-center -z-10"
          style={{
            backgroundImage: 'url("/assets/images/bg/bg-top-right.png")',
          }}
        />

        <div
          id="highlight-menu"
          className="home-highlight-menu flex flex-col lg:flex-row gap-8 w-full"
        >
          <div className="order-2 w-full shrink py-10 pl-4 lg:order-1 lg:w-[50%] lg:pl-8 xl:pl-0">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <div className=" flex flex-col gap-2">
                <div className="">
                  <h1 className="font-bold text-2xl leading-8 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10 text-text-primary-900">
                    ยินดีต้อนรับสู่ BUGABOO.TV
                  </h1>
                </div>
                <div className="font-semibold text-base lg:text-lg leading-5 lg:leading-6 text-text-primary-900">
                  เนื้อหาแนะนำสำหรับคุณ
                </div>
              </div>

              <div className="hidden grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 xl:gap-x-8">
                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="event/ipromiseiwillcomeback/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            Live สด
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        ฉันคอยเธอ
                      </div>
                    </div>
                  </a>
                </div>

                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="/swaytheseries/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            Live สด
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        เพราะเธอใช่ไหม...ที่ทำให้ใจฉันสั่น
                      </div>
                    </div>
                  </a>
                </div>
                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="/shortseries/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            ดูซีรีย์
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        Short Series
                      </div>
                    </div>
                  </a>
                </div>
                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="/variety/yingkhuy-yingluek/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            ดูวาไรตี
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        ยิ่งคุย ยิ่งลึก
                      </div>
                    </div>
                  </a>
                </div>
                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="/originals/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            เกาะติด
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        ข่าวเลือกตั้ง
                      </div>
                    </div>
                  </a>
                </div>
                <div className="aspect-[21/9] w-full">
                  <a target="_blank" href="/originals/">
                    <div className="bg-white relative flex h-full items-center justify-between overflow-hidden rounded-md">
                      <div className="absolute left-0 top-0 z-[2] h-full w-full overflow-hidden object-cover hihighilight-menu-gradient" />

                      <div className="absolute left-0 top-0 z-20 m-2 flex w-full gap-2">
                        <div className="inline-flex items-center rounded-xs border lg:px-2.5 lg:py-0.5 py-px px-1.5 text-xs font-semibold text-utility-brand-purple-700 bg-utility-brand-purple-50">
                          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5">
                            ดูออริจินัล
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 absolute bottom-0 left-0 z-20 m-2 w-[96%] overflow-hidden text-ellipsis whitespace-nowrap text-text-primary_on-brand">
                        ปั๊มหัวใจ
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 w-full shrink py-10 pl-4 lg:order-1 lg:w-[50%] lg:pl-8 xl:pl-0">
            <div className="">
              <h1 className="font-bold text-2xl pb-4 leading-8 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10 text-text-primary-900">
                Live ช่อง 7HD
              </h1>
              <div className="w-full h-100 bg-gray-300 rounded-md mt-4"></div>
              <div className="w-full h-20 bg-gray-800 rounded-md mt-4"></div>
              <h2 className="font-semibold text-lg lg:text-xl text-text-primary-900 mb-2 pt-4">
                รายการช่อง 7HD
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-start gap-4 overflow-hidden overflow-x-auto px-4 py-8 md:justify-center md:px-6 lg:gap-6 lg:py-10 xl:px-28 2xl:px-[144px]">
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/lotto/"
        >
          <div className=" gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="size-6 stroke-white"
            >
              <path
                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            ตรวจสลาก
          </div>
        </a>
        <a
          target="_blank"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="https://shop.bugaboo.tv/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 stroke-white"
            >
              <path
                d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            BUGABOO SHOP
          </div>
        </a>
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/drama/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 stroke-white"
            >
              <path
                d="M9 3L8 8M16 3L15 8M22 8H2M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            ละครมาใหม่
          </div>
        </a>
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/subscription-plan/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white size-6 stroke-white"
            >
              <path d="M11.9983 7.1001C11.8751 7.09988 11.754 7.13254 11.6469 7.19488C11.5397 7.25721 11.4501 7.34708 11.387 7.45567L9.02161 11.5465L6.1608 9.13591C6.04635 9.03966 5.9055 8.98249 5.7579 8.97238C5.6103 8.96226 5.4633 8.99971 5.33741 9.07949C5.21153 9.15927 5.11302 9.27741 5.05564 9.41744C4.99826 9.55746 4.98486 9.71238 5.01731 9.8606L6.43835 16.3322C6.47405 16.4934 6.56201 16.6374 6.68782 16.7406C6.81363 16.8438 6.96982 16.9 7.13083 16.9001H16.8658C17.0271 16.9005 17.1838 16.8445 17.31 16.7412C17.4363 16.638 17.5245 16.4938 17.5603 16.3322L18.982 9.8606C19.0152 9.71189 19.0022 9.55625 18.9448 9.41555C18.8874 9.27485 18.7884 9.15616 18.6619 9.07619C18.5354 8.99621 18.3877 8.95896 18.2395 8.96967C18.0913 8.98039 17.9501 9.03852 17.8358 9.13591L14.9778 11.5465L12.6096 7.45567C12.5464 7.34708 12.4569 7.25721 12.3497 7.19488C12.2426 7.13254 12.1215 7.09988 11.9983 7.1001Z"></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            สมัครพรีเมียม
          </div>
        </a>
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/sport/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4">
            <svg
              className="size-6 stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64 5.64L18.36 18.36M12 3C12 7.971 7.971 12 3 12M12 21C12 16.029 16.029 12 21 12M5.64 18.36L18.36 5.64M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639C14.8493 21.8787 9.1508 21.8787 5.6361 18.3639C2.12138 14.8492 2.12138 9.15074 5.6361 5.63604C9.15082 2.12132 14.8493 2.12132 18.364 5.63604Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            กีฬาสด
          </div>
        </a>
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/lifestyle/all/category/Travel+Destination/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4 ">
            <svg
              className="size-6 stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7448 2.81298C18.7095 1.8165 20.3036 1.80361 21.2843 2.78436C22.2382 3.73823 22.2559 5.27921 21.3243 6.25481L18.5456 9.16457C18.3278 9.39265 18.219 9.50668 18.1518 9.64024C18.0924 9.75847 18.0571 9.88732 18.0478 10.0193C18.0374 10.1684 18.0728 10.3221 18.1438 10.6293L19.8717 18.1169C19.9444 18.4323 19.9808 18.59 19.9691 18.7426C19.9587 18.8776 19.921 19.0091 19.8582 19.1291C19.7873 19.2647 19.6729 19.3792 19.444 19.608L19.0732 19.9788C18.4671 20.585 18.164 20.888 17.8538 20.9429C17.583 20.9908 17.3043 20.925 17.0835 20.761C16.8306 20.5733 16.695 20.1666 16.424 19.3534L14.4142 13.3241L11.0689 16.6695C10.8692 16.8691 10.7694 16.969 10.7026 17.0866C10.6434 17.1907 10.6034 17.3047 10.5846 17.423C10.5633 17.5565 10.5789 17.6968 10.61 17.9775L10.7937 19.6309C10.8249 19.9116 10.8405 20.0519 10.8192 20.1854C10.8004 20.3037 10.7604 20.4177 10.7012 20.5219C10.6344 20.6394 10.5346 20.7393 10.3349 20.939L10.1374 21.1365C9.66434 21.6095 9.42781 21.8461 9.16496 21.9146C8.93442 21.9746 8.68999 21.9504 8.47571 21.8463C8.2314 21.7276 8.04585 21.4493 7.67475 20.8926L6.10643 18.5401C6.04013 18.4407 6.00698 18.391 5.96849 18.3459C5.9343 18.3058 5.89701 18.2685 5.85694 18.2343C5.81184 18.1958 5.76212 18.1627 5.66267 18.0964L3.31018 16.5281C2.75354 16.157 2.47521 15.9714 2.35649 15.7271C2.25236 15.5128 2.22816 15.2684 2.28824 15.0378C2.35674 14.775 2.59327 14.5385 3.06633 14.0654L3.26384 13.8679C3.46352 13.6682 3.56337 13.5684 3.68095 13.5016C3.78511 13.4424 3.89906 13.4024 4.01736 13.3836C4.15089 13.3623 4.29123 13.3779 4.5719 13.4091L6.22529 13.5928C6.50596 13.6239 6.6463 13.6395 6.77983 13.6182C6.89813 13.5994 7.01208 13.5594 7.11624 13.5002C7.23382 13.4334 7.33366 13.3336 7.53335 13.1339L10.8787 9.7886L4.84939 7.77884C4.03616 7.50776 3.62955 7.37222 3.44176 7.11932C3.27777 6.89848 3.212 6.61984 3.2599 6.34898C3.31477 6.03879 3.61784 5.73572 4.22399 5.12957L4.59476 4.7588C4.82365 4.52991 4.9381 4.41546 5.07369 4.34457C5.1937 4.28183 5.3252 4.24411 5.46023 4.23371C5.61278 4.22197 5.77049 4.25836 6.0859 4.33115L13.545 6.05249C13.855 6.12401 14.01 6.15978 14.1596 6.14914C14.3041 6.13886 14.4446 6.09733 14.5714 6.02742C14.7028 5.95501 14.8134 5.84074 15.0347 5.6122L17.7448 2.81298Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            หาที่ท่องเที่ยว
          </div>
        </a>
        <a
          target="_self"
          className="flex flex-col items-center gap-3 lg:w-1/12"
          href="/movies-series/"
        >
          <div className="gap-2 rounded-full border-2 bg-bg-brand-purple-solid p-4 ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 stroke-white"
            >
              <path
                d="M2 12H22M2 7H7M17 7H22M2 17H7M17 17H22M7 22V2M17 22V2M6.8 22H17.2C18.8802 22 19.7202 22 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C22 19.7202 22 18.8802 22 17.2V6.8C22 5.11984 22 4.27976 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.7202 2 18.8802 2 17.2 2H6.8C5.11984 2 4.27976 2 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2 4.27976 2 5.11984 2 6.8V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold text-sm lg:text-base leading-4 lg:leading-5 text-center">
            ดูหนังฟรี
          </div>
        </a>
      </section>

      <TopPage />
      <HighlightsPage />
      <TagsPage />
      <ChannelPage />
      <DramaPage />
      <ActionPage />
      <ShortseriesPage />
      <div className="bg-white h-8 lg:h-14"></div>
      <OriginalsPage />
    </main>
  );
}
