import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Header from '@/components/layout/Header'
import ProfileContent from '@/components/profile/ProfileContent'

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <ProfileContent user={data.user} />
      </div>
    </>
  )
}