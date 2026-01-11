import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-Text.ttf',
      weight: '400',
      style: 'text',
    },
    {
      path: '../fonts/sukhumvit-set/SukhumvitSet-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
  ],
});

export const metadata: Metadata = {
  title: "BUGABOO.TV - ดูละคร ซีรีส์ หนัง กีฬา และความบันเทิง ดูละครย้อนหลัง โปรแกรมถ่ายทอดสดฟุตบอล คลิปรายการทีวีย้อนหลัง ดูหนังออนไลน์",
  description: "BUGABOO.TV ดูละครย้อนหลัง ละครช่อง 7HD รายการทีวีช่อง 7HD ข่าวช่อง 7HD โปรแกรมถ่ายทอดสดฟุตบอลทีมชาติไทย ข่าวบันเทิง ข่าวดารา ข่าวหนัง หนังตัวอย่าง ซีรีส์ช่อง 7HD",
  keywords: ["ดูละครย้อนหลัง", "ละครช่อง 7HD", "รายการทีวีช่อง 7HD", "ข่าวช่อง 7HD", "โปรแกรมถ่ายทอดสดฟุตบอลทีมชาติไทย", "ข่าวบันเทิง", "ข่าวดารา", "ข่าวหนัง", "หนังตัวอย่าง", "ซีรีส์ช่อง 7HD"],
  icons: {
    icon: [
      {
        url: "/assets/images/icons/32x32-gray.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/images/icons/48x48-gray.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/images/icons/180x180-gray.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/images/icons/167x167-gray.png",
        sizes: "167x167",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
