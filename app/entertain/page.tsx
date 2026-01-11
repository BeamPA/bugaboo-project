import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข่าวบันเทิง | BUGABOO.TV ข่าวบันเทิงล่าสุด อัปเดตวงการบันเทิง ซุปตาร์ และวาไรตี้",
  description: "ติดตามข่าวบันเทิงมาใหม่ ข่าวแนะนำ เลือกรับชมจากนักแสดง คลังภาพซุปตาร์ และรายการวาไรตี้สุดพิเศษ พร้อมเส้นทางบันเทิงและเที่ยงบันเทิงที่คุณไม่ควรพลาด",
};

export default function EntertainPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">บันเทิง</h1>
    </main>
  );
}
