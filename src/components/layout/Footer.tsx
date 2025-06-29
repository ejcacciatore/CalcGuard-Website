import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-calcguard-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-calcguard-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CG</span>
                </div>
                <span className="font-bold text-xl">CalcGuard</span>
              </div>
              <p className="text-calcguard-gray-400 mb-4 max-w-md">
                Seamless B2B Data & Analytics Connectivity. Empowering organizations 
                with actionable insights through secure, scalable data collaboration.
              </p>
              <div className="flex space-x-4">
                <Link href={SITE_CONFIG.social.linkedin} className="text-calcguard-gray-400 hover:text-white">
                  LinkedIn
                </Link>
                <Link href={SITE_CONFIG.social.twitter} className="text-calcguard-gray-400 hover:text-white">
                  Twitter
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-calcguard-gray-400">
                <li><Link href="/solutions/trading" className="hover:text-white">Trading Analytics</Link></li>
                <li><Link href="/solutions/compliance" className="hover:text-white">Compliance</Link></li>
                <li><Link href="/solutions/risk" className="hover:text-white">Risk Management</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-calcguard-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/team" className="hover:text-white">Team</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-calcguard-gray-800 mt-8 pt-8 text-center text-calcguard-gray-400">
            <p>&copy; 2024 CalcGuard Technologies. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}