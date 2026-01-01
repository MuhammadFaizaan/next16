'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { createClient } from '../../lib/supabase/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-sora), sans-serif',
    body: 'var(--font-sora), sans-serif',
  },
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [router, supabase])

  return (
    <>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}