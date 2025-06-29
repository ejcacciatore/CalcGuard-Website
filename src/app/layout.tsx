import type { Metadata } from 'next';
import { Inter, Montserrat, Raleway } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'CalcGuard Technologies - Seamless B2B Data & Analytics Connectivity',
  description:
    'We deliver a scalable B2B platform for secure aggregation, normalization and analysis of sensitive data, empowering organizations with actionable insights.',
  keywords: [
    'fintech',
    'B2B',
    'data analytics',
    'trading',
    'financial technology',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} scroll-smooth`}
    >
      <body
        className={`${inter.className} antialiased bg-white text-slate-700`}
      >
        {/* Professional Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Navigation Links - Left Side */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  Home
                </a>
                <a
                  href="#platform"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  Platform
                </a>
                <a
                  href="#solutions"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#about"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  About
                </a>
                <a
                  href="#leadership"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  Leadership
                </a>
                <a
                  href="#contact"
                  className="text-sm text-slate-600 hover:text-red-500 font-medium uppercase tracking-wider transition-colors"
                >
                  Contact
                </a>
              </nav>

              {/* Logo - Right Side */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CG</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-light text-slate-800 tracking-wide">
                    CalcGuard
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    Technologies
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2">
                <div className="w-6 h-0.5 bg-slate-600 mb-1"></div>
                <div className="w-6 h-0.5 bg-slate-600 mb-1"></div>
                <div className="w-6 h-0.5 bg-slate-600"></div>
              </button>
            </div>
          </div>
        </header>

        {/* Page Dots Navigation */}
        <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
          <a
            href="#home"
            className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-500 transition-colors"
          ></a>
          <a
            href="#platform"
            className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-500 transition-colors"
          ></a>
          <a
            href="#solutions"
            className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-500 transition-colors"
          ></a>
          <a
            href="#about"
            className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-500 transition-colors"
          ></a>
          <a
            href="#leadership"
            className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-500 transition-colors"
          ></a>
        </nav>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
