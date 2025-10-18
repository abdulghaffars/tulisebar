"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const timeoutId = window.setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <main className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl border bg-white px-6 py-10 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            {/* simple 404 badge */}
            <span className="text-xl font-bold">404</span>
          </div>
          <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-gray-900">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Maaf, halaman yang Anda cari tidak ditemukan atau sudah dipindahkan.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
            >
              Kembali ke Beranda
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border px-4 py-2 text-gray-800 hover:bg-gray-50"
            >
              Telusuri Halaman
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Kode: 404 • Jika ini kesalahan, coba refresh atau kembali nanti.
            <div className="mt-2">Anda akan dialihkan ke beranda dalam {secondsLeft} detik…</div>
          </div>
        </div>
      </div>
    </main>
  );
}


