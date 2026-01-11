import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ถ่ายทอดสด | BUGABOO.TV ถ่ายทอดสดช่อง 7HD อัปเดตผังรายการ ละครยอดนิยม",
  description: "รับชมถ่ายทอดสดช่อง 7HD อัปเดตผังรายการล่าสุด รายการข่าว ละครยอดนิยม และรายการบันเทิงสดได้ที่ BUGABOO.TV ตลอด 24 ชั่วโมง",
};


export default function LivePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">ถ่ายทอดสด</h1>
    </main>
  );
}
