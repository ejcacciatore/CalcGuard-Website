// src/app/login/page.tsx
import ComingSoonPage from '@/components/ui/ComingSoonPage'
import { comingSoonContent } from '@/lib/coming-soon-content'

export const metadata = {
  title: 'Login Portal - CalcGuard Technologies',
  description: 'Secure client login and account management portal for CalcGuard platform access.',
}

export default function LoginPage() {
  return (
    <ComingSoonPage
      pageTitle={comingSoonContent.login.title}
      pageDescription={comingSoonContent.login.description}
      expectedDate={comingSoonContent.login.expectedDate}
    />
  )
}