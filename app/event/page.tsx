import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "อีเวนต์ กิจกรรม | BUGABOO.TV รวมกิจกรรม ถ่ายทอดสดกีฬา คอนเสิร์ต และพบปะศิลปิน",
  description: "อัปเดตกิจกรรมล่าสุด ซื้อบัตร PPV หรือเข้าร่วมกิจกรรมฟรี พร้อมข่าวสาร กิจกรรมถ่ายทอดสดกีฬา ONE FIGHT NIGHT, ONE ลุมพินี, ฟุตบอลทีมชาติไทย, วอลเลย์บอลทีมชาติไทย และคอนเสิร์ตจากศิลปินดัง",
};

export default function EventPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">อีเวนต์</h1>
    </main>
  );
}
