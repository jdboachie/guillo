'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowPathIcon } from '@heroicons/react/16/solid'


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='w-full h-full flex flex-col gap-8 items-center justify-center'>
      <h2 className='w-1/2 p-8 rounded-lg bg-red-300 text-red-600 text-center'>Something went wrong!</h2>
      <Button
        className='w-1/2'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
      <Link
        href={'https://www.github.com/jdboachie'}
        className='underline underline-offset-4'
      >
        Contact developer
      </Link>
    </div>
  )
}