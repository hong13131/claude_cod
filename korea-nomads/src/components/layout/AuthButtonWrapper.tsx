'use client';

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import AuthButtonClient from './AuthButtonClient'
import type { User } from '@supabase/supabase-js'

export default function AuthButtonWrapper() {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    const supabase = createClient()
    
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
      }
    )
    
    return () => subscription.unsubscribe()
  }, [])

  return <AuthButtonClient user={user} />
}