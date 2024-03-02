'use client'

import Dashboard from "@/components/dashboard";
import { fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export default function Home() {


  return (
    <>
      <div
        className={cn(
            'text-lg p-4 border-b bg-transparent backdrop-blur-lg',
            fontSerif.className,
            'z-10'
          )}
      >
        Dashboard
      </div>
      <Dashboard />
    </>
  );
}
