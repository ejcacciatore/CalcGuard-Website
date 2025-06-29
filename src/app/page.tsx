export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          {/* CalcGuard Logo with Red Background */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-2xl">CG</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">CalcGuard</h1>
              <p className="text-lg text-gray-600">Technologies</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Seamless B2B Data & Analytics Connectivity
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            We deliver a scalable B2B platform for secure aggregation, 
            normalization and analysis of sensitive data, empowering 
            organizations with actionable insights.
          </p>

          {/* Styled Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}