'use client';

import Link from "next/link";


export default function Home() {

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center font-mono">
      <p className="">Landing page is under development</p>
      <Link href={'/dashboard'} className="underline underline-offset-4">Visit dashboard page</Link>
    </main>
  );
}
