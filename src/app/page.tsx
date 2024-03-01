'use client';

import Link from "next/link";


export default function Home() {

  return (
    <main className="w-full h-full justify-center items-center font-mono">
      <p className="">Landing page is under development</p>
      <Link href={'/dashboard'}>Visit dashboard page</Link>
    </main>
  );
}
