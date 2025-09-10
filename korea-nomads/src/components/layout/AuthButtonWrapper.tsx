import { createClient } from '@/utils/supabase/server'
import AuthButtonClient from './AuthButtonClient'

export default async function AuthButtonWrapper() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return <AuthButtonClient user={user} />
}