'use client';

import { User } from '@supabase/supabase-js'
import { signOutAction } from '@/app/actions/auth'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User as UserIcon, LogOut } from 'lucide-react'

interface AuthButtonClientProps {
  user: User | null
}

export default function AuthButtonClient({ user }: AuthButtonClientProps) {
  return user ? (
    <div className="flex items-center space-x-4">
      <Link href="/profile">
        <Button variant="ghost" size="sm">
          <UserIcon className="w-4 h-4 mr-2" />
          {user.email}
        </Button>
      </Link>
      <form action={signOutAction}>
        <Button variant="outline" size="sm" type="submit">
          <LogOut className="w-4 h-4 mr-2" />
          로그아웃
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <Link href="/login">
        <Button variant="ghost" size="sm">
          <UserIcon className="w-4 h-4 mr-2" />
          로그인
        </Button>
      </Link>
      <Link href="/register">
        <Button size="sm">
          회원가입
        </Button>
      </Link>
    </div>
  )
}