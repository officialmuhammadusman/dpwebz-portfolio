'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSpinner from '@/app/components/LoadingSpinner' // Updated to match new name

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true) // Show loader on route change
    const timer = setTimeout(() => setIsLoading(false), 800) // Hide after 800ms (tweak for your anims)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner show={isLoading} />}
      </AnimatePresence>
    </>
  )
}