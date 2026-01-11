import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "กีฬา | BUGABOO.TV ดูกีฬาออนไลน์ ดูกีฬาย้อนหลัง ครบทุกกีฬา ดูฟรี ดูแบบ premium ดูได้ทุกที่ทุกเวลา",
  description: "ติดตามข่าวกีฬา ไฮไลต์แมตช์ดัง มวยไทย 7 สี, ONE FIGHT NIGHT, ONE ลุมพินี โปรแกรมถ่ายทอดสดกีฬา ฟุตบอลทีมชาติไทย วอลเลย์บอลทีมชาติไทย แชมป์กีฬา 7 สี ฟุตอบลเอฟเอคัพ คลิปย้อนหลังฟุตบอล คลิปฟุตบอลโลก ที่ BUGABOO.TV",
};

export default function SportPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">กีฬา</h1>
    </main>
  );
}
