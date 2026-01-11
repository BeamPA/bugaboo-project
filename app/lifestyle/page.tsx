import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ไลฟ์สไตล์ | BUGABOO.TV สถานที่ท่องเที่ยว อาหาร รีวิว ที่เที่ยว & คาเฟ่แนะนำ",
  description: "ค้นหาสถานที่ท่องเที่ยวยอดนิยม ร้านอาหารเด็ด รีวิวที่เที่ยว ที่พัก คาเฟ่แนะนำ และจุดเช็กอินสุดฮิต พร้อมรีวิวยอดนิยมที่คุณไม่ควรพลาด",
};

export default function LifestylePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">ไลฟ์สไตล์</h1>
    </main>
  );
}
