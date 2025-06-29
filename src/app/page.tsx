export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* CalcGuard Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-md flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">CG</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              CalcGuard Technologies
            </h1>
          </div>

          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Seamless B2B Data & Analytics Connectivity
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver a scalable B2B platform for secure aggregation,
            normalization and analysis of sensitive data, empowering
            organizations with actionable insights.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Unified Intelligence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our modern architecture unifies fragmented data, empowering
              organizations to securely harness AI for efficient, low-cost
              collaboration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Global Equity Trading
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced analytics and data interoperability for institutional
              investors, brokers and financial service providers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Full Control
            </h3>
            <p className="text-gray-600 leading-relaxed">
              CalcGuard has no visibility into your data or analytics. Complete
              privacy and security by design.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get Started
          </button>
          <button className="ml-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
