'use client';

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation';


export default function Home() {

  useRouter().push('/dashboard')

  return (
    <main>Landing page</main>
  );
}
