"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50">
        <div className="prose w-full max-w-4xl mx-auto p-6 my-[5%]">
          <p className="text-sm font-medium tracking-wide uppercase">
            404 - Az oldal nem található
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
            Úgy tűnik, ez a csomag eltévedt…
          </h1>

          <p className="mt-10 text-gray-300">
            A raktár helyett a{" "}
            <span className="font-semibold">404-es depóba</span> érkezett. Ne
            aggódj, segítünk visszatalálni a főoldalra!
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Vissza a főoldalra"
            >
              Vissza a főoldalra
            </Link>

            <Link
              href="/#contact"
              className="px-5 py-3 font-medium text-gray-900 bg-white ring-1 ring-gray-200 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Segítség kérése
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
