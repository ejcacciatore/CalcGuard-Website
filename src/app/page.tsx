export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/main_background.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 text-center">
          {/* Hero Logo/Branding */}
          <div className="max-w-6xl mx-auto">
            {/* CalcGuard Logo with Red Accent */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mr-6">
                <span className="text-white font-bold text-2xl">CG</span>
              </div>
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-wide">
                  CalcGuard
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-light tracking-wider uppercase">
                  Technologies
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-slate-800 text-white px-8 py-6 rounded-lg max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl md:text-4xl font-light tracking-wide">
                Seamless B2B Data & Analytics Connectivity
              </h2>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Explore Platform
              </button>
              <button className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </section>

      {/* What We Do Section Preview */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="relative">
              {/* Corner Design Element */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-4 border-t-4 border-red-500"></div>

              <div className="pt-12">
                <p className="text-sm text-slate-600 uppercase tracking-wider font-semibold">
                  CalcGuard® Technologies
                </p>
                <h2 className="text-5xl md:text-6xl font-light text-slate-800 mt-4 leading-tight">
                  WHAT
                  <br />
                  WE DO
                </h2>
                <div className="w-20 h-1 bg-red-500 my-6"></div>
                <p className="text-lg text-slate-700 leading-relaxed max-w-md">
                  We deliver a scalable B2B platform for secure aggregation,
                  normalization and analysis of sensitive data, empowering
                  organizations with actionable insights.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 uppercase tracking-wide text-sm mb-2">
                    UNIFIED, SECURED & CONTROLLED
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our modern architecture unifies fragmented data, empowering
                    organizations to securely harness AI for secure, efficient,
                    low-cost collaboration.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 uppercase tracking-wide text-sm mb-2">
                    GLOBAL EQUITY TRADING
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our current focus is global equity markets, providing
                    advanced analytics and data interoperability for
                    institutional investors, brokers and financial service
                    providers.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-500 rounded-sm transform rotate-45"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 uppercase tracking-wide text-sm mb-2">
                    ADAPTABLE & EXTENSIBLE
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    CalcGuard's platform is architected for rapid expansion into
                    adjacent verticals where similar data complexity, privacy
                    and collaboration challenges exist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
