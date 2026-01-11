import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าว | BUGABOO.TV อัปเดตข่าวใหม่ ข่าวช่อง 7HD คลิปข่าวย้อนหลัง ข่าวโซเชียล ข่าวในกระแส ข่าวด่วน ข่าวดัง ข่าววันนี้",
  description: "ติดตามข่าวใหม่ล่าสุดจากช่อง 7HD ทั้งข่าวด่วน ข่าวดัง ประเด็นร้อนออนไลน์ ข่าวการเมือง ข่าวอาชญากรรม สะเก็ดข่าวย้อนหลัง ฝนฟ้าอากาศย้อนหลัง อัปเดตตลอด 24 ชั่วโมงที่ BUGABOO.TV",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">ข่าว</h1>
    </main>
  );
}
