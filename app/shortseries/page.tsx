import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ช็อตซีรีส์ - ซีรีส์สั้น | BUGABOO.TV",
  description: "ช็อตซีรีส์ ซีรีส์สั้น ซีรีส์คอนเทนต์สั้น",
};

export default function ShortseriesPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-bold">ช็อตซีรีส์</h1>
    </main>
  );
}
