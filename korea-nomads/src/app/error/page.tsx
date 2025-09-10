import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            오류가 발생했습니다
          </h1>
          
          <p className="text-gray-600 mb-8">
            인증 처리 중 문제가 발생했습니다. 다시 시도해 주세요.
          </p>
          
          <div className="space-y-4">
            <Link href="/login">
              <Button className="w-full">
                로그인 페이지로 이동
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}